import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { postsService } from "../../services/posts";
import { Button } from "../Button";
import { TextArea } from "../TextArea";
import { AddPostTitle, ButtonContainer } from "./styles";

export function AddPost({ onAddNewPost }) {
  const { userLoggedIn } = useAuth();
  const [textToPost, setTextToPost] = useState("");

  function handleOnChangeTextArea(event) {
    setTextToPost(event.target.value);
  }

  async function handleOnClickToPost() {
    const responseFromAddNewPost = await postsService.addNewPost({
      userId: userLoggedIn.id,
      postText: textToPost,
    });

    if (!responseFromAddNewPost.error) {
      toast(responseFromAddNewPost.error);

      return;
    }

    toast("Post added!");
  }

  return (
    <div>
      <AddPostTitle>
        Hey <span>{userLoggedIn.name}</span>! What do you want to post?
      </AddPostTitle>

      <TextArea value={textToPost} onChange={handleOnChangeTextArea} />

      <ButtonContainer>
        <Button text="Post" onClick={handleOnClickToPost} />
      </ButtonContainer>
    </div>
  );
}
