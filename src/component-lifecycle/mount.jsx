import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};



    }
    static getDerivedStateFromError(error){
        
    }
}

 
export default ErrorBoundary;