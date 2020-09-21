import useMousePosition from './useMousePosition';

const useBackground = () => {
  const position = useMousePosition();
  const background = position.x < window.innerWidth/2 ? 'pink' : 'orange';

  return { position, background }
}

export default useBackground;