export const useSideScroll = () => {
  const elRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    const el = elRef.value;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (el.scrollTo) {
          const scrollSpeed = 800;
          el.scrollTo({
            left: el.scrollLeft + (e.deltaY > 0 ? scrollSpeed : -scrollSpeed),
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  });

  return elRef;
};
