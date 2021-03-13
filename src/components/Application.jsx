import React, { Component } from "react";

import { firestore, auth, createUserProfileDocument } from "../firebase";

import Posts from "./Posts";
import { collectIdsAndDocs } from "../utilities";
import Authentication from "./Authentication";

class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ posts });
      });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const user = await createUserProfileDocument(userAuth);
      console.log(user);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { posts, user } = this.state;

    return (
      <main className='Application'>
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
