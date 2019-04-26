## React interview questions

1. What is state and props in reactjs?
    Props is mmutable meaning it cannot be change. Props can pass data from component to component or from parent to child.
    State on the otherhand is mutable, meaning it can be change and can be use on the scope

2. What is high order component? How do you use it?
    It is like inheritance in OOP, you can re-use the component logic.
    I use it to pass the component to other component and it will return new component.

3. What is context? What are the benefits of it?
    It is use to share data accross the application. It is like global variable that can be use/share.

4. How to assign and change the value of state in a component?
    To assign the state value, it can be done inside the constructor or directly inside the class.
    To change the state value, need to call this.setState then pass the new/updated state.

5. Could you explain the life-cycle of a react component?
    constructor - initialization
    componentWillMount - react readying the component to mount into the DOM
    render - to update or mutate the DOM
    componentDidMount - component already rendered as DOM, it's like document.ready({}) in jquery

6. What is fragment in react?
    It is use to group the list of children, it is more likely to remove the "div" wrapper when returning array of elements/components.

7. What is ref in react?
    Provide access or to get reference to the DOM or to put it simply to access the DOM directly.

8. What is container component? What is presentational component?
    Container manages or store its own data. It's like the parent component.
    Presentational display data that manage/store by the container.

9. How to pass a function to a component?
    Can be pass via props.

10. What is portal?
    Render components outside of your main component/app.
