
# Proptypes library in react 

- React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead.


As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:

`import PropTypes from 'prop-types';`

      class Greeting extends React.Component {
             render() {
               return (
                <h1>Hello, {this.props.name}</h1>
               );
            }
        }`

Greeting.propTypes = {
 ` name: PropTypes.string`
};
- In this example, we are using a class component, but the same functionality could also be applied to function components, or components created by React.memo or React.forwardRef.

- PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

