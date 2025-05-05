pipeline {
  agent any
  tools { nodejs "NodeJS" }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', 
          url: 'https://github.com/tha6unn/srm-smart-parking.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}