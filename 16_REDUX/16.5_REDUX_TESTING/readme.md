## 16.5 - Redux Testing

After we've seen React Testing Library [here](../../15_REACT_TESTING_LIBRARY), it becomes clear everything we have on our application and that changes as the users interacts with it must be properly tested. With Redux, is not an exception.

Just like when testing with React-Router-Dom, here we must set up our environment accordingly with Redux requirements, such as the existence of a store and a **Provider** to wrap every component that wants access to our global state.

And just like before, all we have to do is render our targeted component with those tools in order to test behavior and state-changing events.

----

#### Exercises

We have 1 exercise on this short lesson, which is to test the application we've built [here](../16.2_REACT_REDUX/exercise_2)

1. [Testing with a Redux Store](./exercise)

----

#### Comments

Testing with Redux on our project is no difference than testing with react-router-dom. You just have to remember to properly set up your fake store(s) and state(s) in order to put your application to a variety of scenarios for your testings. Because this is just a slight add-on to the previous seen RTL content, there's not much to see here.

###### Feedback

As always, any feedback or suggestion is welcomed.
