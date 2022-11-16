import React from 'react';
import GearIcon from './icons/gear.svg';
import DequeueIcon from './icons/dequeue.svg';
import RefreshIcon from './icons/refresh.svg';
import {StyleSheet, View} from 'react-native';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconName: this.props.iconName ? this.props.iconName : 'dequeueIcon',
      width: this.props.width
        ? this.props.width
        : this.props.size
        ? this.props.size
        : 50,
      height: this.props.height
        ? this.props.height
        : this.props.size
        ? this.props.size
        : 50,
    };
  }

  render() {
    let icon = null;
    style = {
      fill: this.props.fill ? this.props.fill : '#fff',
    };
    switch (this.state.iconName) {
      case 'gearIcon':
        icon = (
          <GearIcon
            width={this.state.width}
            height={this.state.height}
            style={style}
          />
        );
        break;
      case 'refreshIcon':
        icon = (
          <RefreshIcon
            width={this.state.width}
            height={this.state.height}
            style={style}
          />
        );
        break;
      case 'dequeueIcon':
        icon = (
          <DequeueIcon width={this.state.width} height={this.state.height} />
        );
        break;
      default:
        icon = (
          <DequeueIcon width={this.state.width} height={this.state.height} />
        );
        break;
    }

    return <View style={this.props.style}>{icon}</View>;
  }
}

export default Icon;
