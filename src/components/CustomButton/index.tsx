import "./styles.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  color: string;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onClick, color }) => {
  return (
    <>
      <button className="custom-button" type="submit" onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default CustomButton;
