import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event){
    event.preventDefault();
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`)
    // second, transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    // Any where else
    return (
      // render methods are bound to the class we are in
      // eg, goToStore is NOT bound to the component we are creating
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
