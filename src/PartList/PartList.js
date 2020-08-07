import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';

export class PartList extends Component {
    render() {
        const features= Object.keys(this.props.features).map((feature,idx) => {
            const featureHash = feature + '-' + idx;
        
        return (
            <FeatureItem
            items= {this.props.features[feature]}
            feature = {feature}
            featureHash= {featureHash}
            selected= {this.props.selected[feature]}
            handleCheckItem = {(feature, item) => this.handleCheckItem(feature, item)}
            handleSelectFeature = {(feature,item) => this.props.handleSelectFeature(feature, item)}
            />
        );
    });
    return(
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
}
}

export default PartList
