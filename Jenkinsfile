pipeline {
  agent any
  tools { nodejs "NodeJS-18" }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'dev', // Replace with your branch name
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
        sh 'npm run test'  # Replace with your test command (e.g., `npm test`)
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'  # Build your React app
      }
    }
  }
}