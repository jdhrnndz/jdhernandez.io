'use client'

const HomeBanner = () => {
  return (
    <div className="banner rounded">
      <div className="corner"></div>
      <div className="corner"></div>
      <div className="corner"></div>
      <div className="corner"></div>
      <img className="image-rounded" alt="JD Hernandez's picture" src="/jdhernandez.jpg"/>
      <p><i>Hello!</i> I am </p>
      <h1 className="text-3xl font-bold">JD Hernandez</h1>
      <hr />
      <span>Software Developer</span>
    </div>
  );
}

export default HomeBanner;
