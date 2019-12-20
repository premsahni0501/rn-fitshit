import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export const MaterialIconsPack = {
  name: 'material',
  icons: createIconsMap('material'),
};
export const FeatherIconsPack = {
  name: 'feather',
  icons: createIconsMap('feather'),
};
export const EntypoIconsPack = {
  name: 'entypo',
  icons: createIconsMap('entypo'),
};

function createIconsMap(kind) {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(kind, name);
      },
    },
  );
}

const IconProvider = (kind, name) => ({
  toReactElement: props => RenderIcon({kind, name, ...props}),
});

const RenderIcon = ({kind, name, fill, height, ...props}) => {
  let IconPack = '';
  switch (kind) {
    case 'material':
      IconPack = MaterialIcons;
      break;
    case 'feather':
      IconPack = FeatherIcons;
      break;
    case 'entypo':
      IconPack = EntypoIcons;
      break;
    default:
      IconPack = FeatherIcons;
      break;
  }
  return <IconPack name={name} size={height} color={fill} {...props} />;
};
