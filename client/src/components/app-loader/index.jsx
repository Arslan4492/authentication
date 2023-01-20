import { memo } from "react";
import { Circles } from "react-loader-spinner";

const AppLoader = () => {
  return (
    <div className='fixed flex h-full w-full items-center justify-center'>
      <Circles
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='circles-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default memo(AppLoader);
