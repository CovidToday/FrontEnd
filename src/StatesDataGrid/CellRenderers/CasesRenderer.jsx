import React, { Component } from 'react';
import upIcon from "../../images/up red.png"
import downIcon from "../../images/down green.png"
import yellowDash from "../../images/yellowDash.png"

export default class PosRateRenderer extends Component {
  constructor(props) {
    super(props);
  }

	getValue() {
		const data = this.props.data;
			if(this.props.value && this.props.value !== "NA"){
				if(parseFloat(data.dailyCases) < (parseFloat(data.dailyCasesOld) - parseFloat(data.dailyCasesOld/20))) {
				    return <span title={`Value shown for ${this.props.data.maCasesDate}`}>
				                <span style={{paddingRight: "2px"}}>{data.cumCases}</span>
				                <span>(
                                    <span style={{fontSize: "smaller"}}>{this.props.value}</span>
				                    {/*<img src={downIcon} className="cell-icon" style={{height: "10px"}}/>*/})
				                </span>
				           </span>
			    } else if(parseFloat(data.dailyCases) > (parseFloat(data.dailyCasesOld) + parseFloat(data.dailyCasesOld/20))) {
                    return <span title={`Value shown for ${this.props.data.maCasesDate}`}>
                                <span style={{paddingRight: "2px"}}>{data.cumCases}</span>
                                <span>(
                                    <span style={{fontSize: "smaller"}}>{this.props.value}</span>
                                    {/*<img src={upIcon} className="cell-icon" style={{height: "10px"}}/>*/})
                                </span>
                           </span>
                } else {
				    return <span title={`Value shown for ${this.props.data.maCasesDate}`}>
				                <span style={{paddingRight: "2px"}}>{data.cumCases}</span>
				                <span>(
				                    <span style={{fontSize: "smaller"}}>{this.props.value}</span>
				                    {/*<img src={yellowDash} className="cell-icon" style={{height: "10px"}}/>*/})
				                </span>
				           </span>
			    }
		    } else {
		        return <span>-</span>
		    }
	}

  render() {
    return (
      <span>
        {this.getValue()}
      </span>
    );
  }
}