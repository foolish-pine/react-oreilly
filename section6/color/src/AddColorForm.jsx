import { useInput } from "./hocks";
import { useColors } from "./ColorProvider";

export const AddColorForm = () => {
  const { addColor } = useColors();

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        {...titleProps}
        placeholder="color title..."
        required
      />
      <input type="color" {...colorProps} required />
      <button>ADD</button>
    </form>
  );
};
