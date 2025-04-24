// authService.ts
import axios from 'axios';

export async function registerUser(firstname: string, surname:string, phonenumber: string, password: string, user_type:string, email: string): Promise<any> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL environment variable is not defined');
  }

  const url = `${API_BASE_URL}/auth/sign-up-step-one`;

  try {
    const response = await axios.post(url, {
      firstname,
      surname,
      phonenumber,
      password,
      user_type,
      email
    });

    const { user_id } = response.data;

    // Storing user_id in sessionStorage
    if (user_id) {
      sessionStorage.setItem("user_id", user_id);  // Store the user_id in sessionStorage
      console.log("User ID stored in sessionStorage:", user_id);
    }

    return response.data;
    
  } catch (error: any) {
    console.error("Error during registration:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || error.message);
    
  }
}




export async function loginUser(email: string, password: string): Promise<any> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL environment variable is not defined');
  }

  const url = `${API_BASE_URL}/auth/sign-in`;
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const data = new URLSearchParams();
  data.append('username', email);
  data.append('password', password);

  try {
    const response = await axios.post(url, data.toString(), { headers });

    
    console.log("Data  ",data)

    console.log("response  ",response)
    
    if (response.data && response.data.token) {

      // Store the token in sessionStorage
      sessionStorage.setItem('access_token', response.data.access_token);
      
      return response.data;
    } else {
      throw new Error('Invalid login response');
    }
    // return response.data;
  } catch (error: unknown) {
    // throw new Error(error.response?.data?.message || 'An unexpected error occurred');
  }
}

export async function verifyOtp(
  Val1: string,
  Val2: string,
  Val3: string,
  Val4: string,
  Val5: string,
  Val6: string,
  userId: string,
): Promise<any> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL environment variable is not defined');
  }

  const url = `${API_BASE_URL}auth/validate-otp`;
  const headers = {
    'Content-Type': 'application/json', // Correct content type
    'Accept': 'application/json',
  };

  const otp = `${Val1}${Val2}${Val3}${Val4}${Val5}${Val6}`;

    // Create request body as a JSON object
    const data = {
      otp: parseInt(otp), // Convert OTP to an integer if that's what the API expects
      user_id: userId,
    };
  
    console.log("Sending data:", data);

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error: any) {
    // Error handling
    if (error.response) {
      // Server responded with a status other than 2xx
      throw new Error(error.response.data?.message || 'OTP validation failed');
    } else if (error.request) {
      // No response received from the server
      throw new Error('No response from server. Please try again later.');
    } else {
      // Other error (e.g., request setup)
      throw new Error('An unexpected error occurred');
    }
  }
}

