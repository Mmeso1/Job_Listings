import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-react";

const EmptyComponent = () => {
  return (
    <Empty className="mt-20">
      <EmptyImage>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">
        This page isn't available right now
      </EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <a href="/" className={buttonVariants({ color: "primary" })}>
        Go to home
      </a>
    </Empty>
  );
};

export default EmptyComponent;
