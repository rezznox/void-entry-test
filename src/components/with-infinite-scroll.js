import InfiniteScroll from "react-infinite-scroll-component";

const withInfiniteScroll = (Component) =>
  function ComponentWithScroll(props) {
    const { list, next = () => {console.log('dupe')}, loader, height } = props;

    return (
      <InfiniteScroll
        dataLength={list.length}
        hasMore={true}
        hasChildren={true}
        scrollThreshold={"100px"}
        next={next}
        loader={loader}
        height={height || '450px'}
      >
          <Component {...props}></Component>
      </InfiniteScroll>
    );
  };

export default withInfiniteScroll;
