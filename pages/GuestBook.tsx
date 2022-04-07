import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { GuestBookPostType, PostType, FormState } from "../types";

type Props = {
  id: number;
  name: string;
  message: string;
};

const initialState = {
    name: "",
    email: "",
    message: "",
  }

export default () => {
  const [posts, setPosts] = useState<GuestBookPostType[]>([])
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
function resetForm() {
  setFormState(initialState)
}
  
const Post = ({ id, name, message }: Props) => {
  return (
    // <Link to={`/guestbook/${id}`}>
      <div key={id} className="mb-4">
        <h2 className="text-3xl mb-2 text-center">{name}</h2>
        <p className="text-center">{message}</p>
      </div>
    // </Link>
  );
};
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      axios
      .get("http://localhost:3001/guestbookposts")
      .then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormState({ ...formState, name: formState.name.toUpperCase() });

    await axios.post("http://localhost:3001/guestbookposts", formState);
    await axios
      .get("http://localhost:3001/guestbookposts")
      .then((res) => {
      setPosts(res.data);
      resetForm();    
      })
}
  return (
    <div className="mt-5 min-h-screen flex flex-col items-center justify-center space-y-8">
    <h1 className="text-6xl text-center mb-8">Guestbook</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-1/5 space-y-4">
        <input
          type="text"
          value={formState.name}
          onChange={(event) =>
            setFormState({ ...formState, name: event.target.value })
          }
          placeholder="Your Name"
        />
        <input
          value={formState.email}
          type="email"
          placeholder="Your email"
          onChange={(event) =>
            setFormState({ ...formState, email: event.target.value })
          }
        />
        <textarea
          value={formState.message}
          placeholder="Your message"
          rows={6}
          onChange={(event) =>
            setFormState({ ...formState, message: event.target.value })
          }
        ></textarea>
        <button
          type="submit"
          className="bg-slate-800 hover:text-fuchsia-500 text-fuchsia-200 py-3 rounded-md"
        >
          Submit Form
        </button>
      </form>
      <div className="max-w-7xl mx-auto max-h-fit ">
      {posts.map((post) => (
        <div className=""><Post key={post.id} {...post} /></div>
      ))}
    </div>
      
    </div>
    
  );
};

