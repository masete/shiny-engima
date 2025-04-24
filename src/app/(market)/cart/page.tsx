import { Selection } from '@/components/Products/Selection';
import Banner from '@/components/Products/Bar';
import Container from '@/components/Container';
import { CartClient } from './CartClient';

const CartPage = () => {
  return (
    <div className='pt-0'>
      <Container>
  
      <div className='mx-6 my-4'>
        <Banner 
          title="Back" 
          showAllText="" 
          bgColor="#FFFFFF" 
          textColor="#000" 
          borderColor="#FFFFFF" 
          showChevron={false}
        />
        <CartClient/>
      </div>
      </Container>
    </div>
  );
};

export default CartPage;
