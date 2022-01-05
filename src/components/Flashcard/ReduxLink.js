import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { reset } from "./flashcard-redux/flashcardActions";

export default function ReduxLink() {
  const dispatch = useDispatch();
  return (
    <Link
      to="/"
      className="backhome btn btn-primary mt-2"
      onClick={() => dispatch(reset())}
    >
      Go back to home screen
    </Link>
  );
}
