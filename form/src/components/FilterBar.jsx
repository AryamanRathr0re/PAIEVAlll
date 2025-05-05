import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPriceRange, setRating } from "../redux/filterSlice";

const filterBar = () => {
  const dispatch = useDispatch();
  const { selectedCategory, PriceRange, rating } = useSelector(
    (state) => state / filters
  );
};
