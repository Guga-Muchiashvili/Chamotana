'use client'
import * as yup from "yup";

 const schema = yup.object().shape({
  country : yup.string(),
  method : yup.string(),
});

export default schema