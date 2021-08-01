import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, InjectedFormProps, reduxForm, reset } from 'redux-form'
import classes from './MyPosts.module.css'
import { Post } from './Posts/Post'

export type MyPostsPropsType = {
  postsData: Array<PostElementType>
  newPostText: string
  addPost: (newText: string) => void
}

export type PostElementType = {
  id: number
  message: string
}

type FormDataType = {
  postText: string
}
//
// -----AddNewPostForm component start
//
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'Type here a post...'} name={'postText'} component={'textarea'} />
      <div><button>Add post</button></div>
    </form>
  )
}

const PostMessageReduxForm = reduxForm<FormDataType>({
  form: 'ProfileAddNewForm'
})(AddNewPostForm)
//
// -----MyPosts component start
//
export function MyPosts(props: MyPostsPropsType) {

  let dispatch = useDispatch()

  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
    props.addPost(formData.postText)
    dispatch(reset('ProfileAddNewForm'))
  }
  let postsElements = props.postsData.map((item, i) => {
    return <Post key={i} message={item.message} />
  })

  //---UI
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <PostMessageReduxForm onSubmit={onSubmit} />
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  )
}
