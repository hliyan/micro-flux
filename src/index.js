import Dispatcher from './Dispatcher';
import RESTApi from './net/RESTApi';
import ArrayStore from './storage/ArrayStore';
import Input from './ui/Input';

var net = {
    RESTApi: RESTApi
};

var storage = {
    ArrayStore: ArrayStore
};

var ui = {
    Input: Input
};

export default {
    ui: ui,
    net: net,
    storage: storage,
    Dispatcher: Dispatcher
};