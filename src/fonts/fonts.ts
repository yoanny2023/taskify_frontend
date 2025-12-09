import {Inter,Poppins} from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const poppins = Poppins({
 subsets: ["latin" ],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"]
});
