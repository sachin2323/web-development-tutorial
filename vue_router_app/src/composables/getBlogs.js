import { ref } from "vue";

const getBlogs = () => {
  const blogs = ref([]);
  const error = ref(null);

  const fetchData = async () => {
    try {
      let data = await fetch("http://localhost:3000/blogs");
      console.log(data);
      if (!data.ok) {
        throw new Error("data is not reicieved properly");
      }
      blogs.value = await data.json();
    } catch (e) {
      error.value = e.message;
      console.log(e.message);
    }
  };

  return { blogs, error, fetchData };
};

export default getBlogs;
