/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Img from './common/page/Img_test'; //react-native在0.26后不使用ES5的require语句。
import Modal1 from './common/page/Modal';
import Modal2 from './common/page/Modal_test';
import error from "./common/page/Error";

AppRegistry.registerComponent('rn_common', () => error);
