import React from 'react';

class Totals extends React.Component {

   state = {
       discountAmount: 0,
   }

    discount = (e) => {
        console.log(e.target.value);
   
        const fiveOff = '5';
        const TenOff = '10';
        const fifteenOff = '15';
        const code = e.target.value.toLowerCase();
        const total = this.props.total;

        if(code === fiveOff) {
    
            this.setState({
                discountAmount: -5
            })
        }

        else if(code === TenOff && total > 50) {
            this.setState({
                discountAmount: -10
            })
        }
       else if(code === fifteenOff && total > 75) {
            this.setState({
                discountAmount: -15
            })
        } else {
            this.setState({
                discountAmount: 0
            })
        }
    }

    render() {

        return (
            <div className ="Totals">

                {this.props.total - this.state.discountAmount}

                discount code: 
                <input type ="text" onChange={this.discount} placeholder="enter discount"/>

              

            </div>
        )
    }
}
export default Totals;