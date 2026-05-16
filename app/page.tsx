import { Navbar } from "@/components/navbar";
import { Herosection } from "@/components/herosection";
import { Services } from "@/components/services";
import { Getstarted } from "@/components/getstarted";
import { Savings } from "@/components/savings";
import { Banking } from "@/components/banking";
import { Learnmore } from "@/components/learnmore";
import { Partners } from "@/components/partners";
import { Download } from "@/components/download";
import { Questions } from "@/components/questions";
import { Noneed } from "@/components/noneed";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <section>
      {/* <Navbar /> */}
      <Herosection />
      <Services />
      <Getstarted />
      <Savings />
      <Banking />
      <Learnmore />
      <Partners />
      <Download />
      <Questions />
      <Noneed />
      {/* <Footer /> */}
    </section>
  );
}
