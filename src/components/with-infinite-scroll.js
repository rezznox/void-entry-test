import InfiniteScroll from "react-infinite-scroll-component";
import AppLoader from "./loader";

const withInfiniteScroll = (Component) =>
  function ComponentWithScroll(props) {
    const {
      list,
      next = () => {
        console.info("next function not implemented");
      },
      height,
    } = props;
    const loader = (
      <AppLoader />
    );

    return (
      <InfiniteScroll
        dataLength={list.length}
        hasMore={true}
        hasChildren={true}
        scrollThreshold={"100px"}
        next={next}
        loader={loader}
        height={height || "450px"}
      >
        {list.length > 0 && <Component {...props}></Component>}
      </InfiniteScroll>
    );
  };

export default withInfiniteScroll;
