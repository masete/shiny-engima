// export const truncateText = (str: string) => {
//     if(str.length < 25)
//         return str
//     return str.substring(0,25) + "....";

// }

export function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
  