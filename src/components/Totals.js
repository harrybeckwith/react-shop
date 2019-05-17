import React from 'react';

class Totals extends React.Component {

   state = {
       discountAmount: 0,
   }

    discount = (e) => {
        console.log(e.target.value);

        const fiveOff = '5 off 2019';
        const TenOff = '10 off 2019';
        const fifteenOff = '15 off 2019';
        const code = e.target.value.toLowerCase();


        if(code === fiveOff) {
            this.setState({
                discountAmount: -5
            })
        }

        else if(code === TenOff) {
            this.setState({
                discountAmount: -10
            })
        }
       else if(code === fifteenOff) {
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

                {this.props.totals - this.state.discountAmount}

                discount code: 
                <input type ="text" onChange={this.discount} placeholder="enter discount"/>

            </div>
        )
    }
}
export default Totals;