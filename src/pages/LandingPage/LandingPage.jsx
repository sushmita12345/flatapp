import {
  Notification,
  Header,
  MainSection,
  Cateogry,
  ImageSection,
  TopLocalities,
  ChooseUs,
  Testimonials,
  Blogs,
  MostSearched,
  Footer,
} from "../../components/index";

export function LandingPage() {
  return (
    <div>
      <Notification />
      <Header />
      <MainSection />
      <Cateogry />
      <ImageSection />
      <TopLocalities />
      <ChooseUs />
      <Testimonials />
      <Blogs />
      <MostSearched />
      <Footer />
    </div>
  );
}
