pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                    scp -r assets root@mterczynski.pl:/var/www/html
                    scp -r index.html root@mterczynski.pl:/var/www/html/index.html
                '''
            }
        }
    }
}
