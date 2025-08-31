import { useLottie } from 'lottie-react';
import { cn } from '@/lib/utils';

const LottieAnimation = ({
  animationData,
  className,
  loop = true,
  autoplay = true,
  style = {},
  ...props
}) => {
  const { View } = useLottie({
    animationData,
    loop,
    autoplay,
    style: {
      width: '100%',
      height: '100%',
      ...style
    },
    ...props
  });

  return (
    <div className={cn('w-full h-full', className)}>
      {View}
    </div>
  );
};

export default LottieAnimation;