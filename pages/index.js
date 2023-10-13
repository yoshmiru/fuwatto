import Image from 'next/image'

//import BlogPagination, { getStaticProps } from "./page/[slug]";
import Base from "@layouts/Baseof";

//export { getStaticProps };
const Document = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <Image
            src="/images/hero.jpg"
            width={1280}
            height={960}
            alt="ふわっとロゴ"
          />
        </div>
        {/* 取り組み */}
      </section>
    </Base>
  );
};

export default Document;
