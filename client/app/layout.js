
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "../redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chợ tốt",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div>
            {children}
          </div>
        
        </StoreProvider> 
      </body>
    </html>
  );
}
export default RootLayout