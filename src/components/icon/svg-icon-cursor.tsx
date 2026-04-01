import { SvgIcon, type SvgIconProps } from "@/components/icon/svg-icon";

const SvgIconCursor = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path d="M28.6,8.4l-12-6.9c-0.4-0.2-0.9-0.2-1.2,0l-12,6.9C3,8.6,2.8,8.9,2.8,9.3v14c0,0.4,0.2,0.7,0.5,0.9l12,6.9c0.4,0.2,0.9,0.2,1.2,0l12-6.9c0.3-0.2,0.5-0.5,0.5-0.9v-14C29.1,8.9,28.9,8.6,28.6,8.4L28.6,8.4L28.6,8.4z M27.8,9.9L16.2,29.9c-0.1,0.1-0.3,0.1-0.3-0.1V16.7c0-0.3-0.1-0.5-0.4-0.6L4.2,9.5C4,9.4,4.1,9.2,4.2,9.2h23.2C27.8,9.2,28,9.6,27.8,9.9L27.8,9.9L27.8,9.9z" />
    </SvgIcon>
  );
};

export { SvgIconCursor };
