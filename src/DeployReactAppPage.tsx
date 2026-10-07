import React from "react";

const DeployReactAppPage: React.FC = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f7fb;
          color: #1f2937;
          line-height: 1.6;
        }

        .container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero {
          background: #111827;
          color: white;
          padding: 60px 20px;
        }

        .hero h1 {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .hero p {
          font-size: 18px;
          color: #d1d5db;
          max-width: 760px;
        }

        .stack-context {
          font-size: 15px;
          color: #bfdbfe;
          max-width: 780px;
          margin-bottom: 18px;
        }

        .badge {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 13px;
          margin-bottom: 20px;
        }

        main {
          padding: 40px 0;
        }

        .card {
          background: white;
          border-radius: 14px;
          padding: 30px;
          margin-bottom: 24px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.06);
        }

        .card h2 {
          font-size: 25px;
          margin-bottom: 16px;
          color: #111827;
        }

        .card h3 {
          margin-top: 20px;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 22px;
        }

        li {
          margin-bottom: 8px;
        }

        .architecture {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .architecture-box {
          padding: 18px 22px;
          background: #eff6ff;
          border: 2px solid #2563eb;
          border-radius: 10px;
          font-weight: 700;
          text-align: center;
          min-width: 130px;
        }

        .arrow {
          font-size: 24px;
          color: #6b7280;
        }

        .step {
          padding: 24px;
          border-left: 4px solid #2563eb;
          margin-bottom: 24px;
          background: #fafafa;
          border-radius: 8px;
        }

        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-bottom: 14px;
        }

        pre {
          background: #111827;
          color: #e5e7eb;
          padding: 18px;
          border-radius: 8px;
          overflow-x: auto;
          margin-top: 12px;
          font-size: 14px;
        }

        code {
          font-family: Consolas, monospace;
        }

        .success {
          background: #ecfdf5;
          border-left: 5px solid #10b981;
          padding: 18px;
          border-radius: 8px;
          margin-top: 16px;
        }

        .success strong {
          color: #047857;
        }

        footer {
          background: #111827;
          color: #9ca3af;
          text-align: center;
          padding: 26px;
        }

        @media (max-width: 700px) {
          .hero h1 {
            font-size: 30px;
          }

          .card {
            padding: 20px;
          }

          .arrow {
            transform: rotate(90deg);
          }

          .architecture {
            flex-direction: column;
          }
        }
      `}</style>

      <header className="hero">
        <div className="container">
          <span className="badge">AWS • EC2 • NGINX • CI/CD</span>

          <p className="stack-context">
            AWS provides the cloud platform, EC2 hosts the React build, NGINX
            serves the app to users, and CI/CD automatically builds and deploys
            new changes from GitHub.
          </p>

          <h1>Deploy React App to AWS EC2 with Nginx & GitHub Actions</h1>

          <p>
            A simple step-by-step guide to deploying a React application on AWS
            EC2 using Nginx and GitHub Actions for automated deployment.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <h2>Deployment Architecture</h2>

          <div className="architecture">
            <div className="architecture-box">
              GitHub
              <br />
              Repository
            </div>

            <span className="arrow">→</span>

            <div className="architecture-box">
              GitHub Actions
              <br />
              CI/CD
            </div>

            <span className="arrow">→</span>

            <div className="architecture-box">
              AWS EC2
              <br />
              Server
            </div>

            <span className="arrow">→</span>

            <div className="architecture-box">
              Nginx
              <br />
              Web Server
            </div>

            <span className="arrow">→</span>

            <div className="architecture-box">React App</div>
          </div>
        </section>

        <section className="card">
          <h2>Prerequisites</h2>

          <ul>
            <li>AWS Account</li>
            <li>EC2 Instance</li>
            <li>GitHub Repository</li>
            <li>React Application</li>
            <li>EC2 SSH Key (.pem)</li>
            <li>Basic Linux knowledge</li>
          </ul>
        </section>

        <section className="card">
          <Step number={1} title="Create an AWS EC2 Instance">
            <p>
              Launch an Amazon Linux or Ubuntu EC2 instance and configure your
              Security Group.
            </p>

            <h3>Required Ports</h3>

            <CodeBlock>
              {`SSH   → 22
HTTP  → 80
HTTPS → 443`}
            </CodeBlock>
          </Step>

          <Step number={2} title="Connect to EC2">
            <p>Connect to your EC2 instance using SSH.</p>

            <CodeBlock>
              {`ssh -i "ec2.pem" ec2-user@YOUR_EC2_PUBLIC_IP`}
            </CodeBlock>
          </Step>

          <Step number={3} title="Install Node.js">
            <CodeBlock>
              {`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash

source ~/.bashrc

nvm install 20

node -v
npm -v`}
            </CodeBlock>
          </Step>

          <Step number={4} title="Install Nginx">
            <CodeBlock>
              {`sudo dnf install nginx -y

sudo systemctl start nginx

sudo systemctl enable nginx

sudo systemctl status nginx`}
            </CodeBlock>
          </Step>

          <Step number={5} title="Build React Application">
            <p>Install project dependencies and create the production build.</p>

            <CodeBlock>
              {`npm install

npm run build`}
            </CodeBlock>
          </Step>

          <Step number={6} title="Configure Nginx">
            <CodeBlock>
              {`sudo nano /etc/nginx/conf.d/react-app.conf`}
            </CodeBlock>

            <h3>Nginx Configuration</h3>

            <CodeBlock>
              {`server {
    listen 80;

    server_name _;

    root /var/www/react-app/dist;

    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}`}
            </CodeBlock>
          </Step>

          <Step number={7} title="Test Nginx Configuration">
            <CodeBlock>
              {`sudo nginx -t

sudo systemctl restart nginx`}
            </CodeBlock>
          </Step>

          <Step number={8} title="Create GitHub Actions Workflow">
            <p>Create this file inside your project:</p>

            <CodeBlock>{`.github/workflows/deploy.yml`}</CodeBlock>

            <h3>deploy.yml</h3>

            <CodeBlock>
              {`name: Deploy React App

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Build React app
        run: npm run build

      - name: Create SSH key
        run: |
          echo "$SSH_KEY" > ec2.pem
          chmod 600 ec2.pem
        env:
          SSH_KEY: \${{ secrets.EC2_SSH_KEY }}

      - name: Deploy to EC2
        run: |
          scp -o StrictHostKeyChecking=no \\
          -i ec2.pem \\
          -r dist/* \\
          ec2-user@YOUR_EC2_IP:/var/www/react-app/`}
            </CodeBlock>
          </Step>

          <Step number={9} title="Add GitHub Secrets">
            <p>Open your GitHub repository and go to:</p>

            <CodeBlock>
              {`Settings
→ Secrets and variables
→ Actions
→ New repository secret`}
            </CodeBlock>

            <p style={{ marginTop: "14px" }}>Add your EC2 private key using:</p>

            <CodeBlock>{`EC2_SSH_KEY`}</CodeBlock>
          </Step>

          <Step number={10} title="Push Code">
            <CodeBlock>
              {`git add .

git commit -m "Setup EC2 deployment"

git push origin main`}
            </CodeBlock>

            <p style={{ marginTop: "14px" }}>
              GitHub Actions will run automatically after the push.
            </p>
          </Step>
        </section>

        <section className="card">
          <h2>Verify Deployment</h2>

          <p>Open your EC2 Public IP in the browser:</p>

          <CodeBlock>{`http://YOUR_EC2_PUBLIC_IP`}</CodeBlock>

          <div className="success">
            <strong>✓ Deployment Successful</strong>

            <p>
              Your React application is now running on AWS EC2 and being served
              by Nginx.
            </p>
          </div>
        </section>

        <section className="card">
          <h2>Useful EC2 Commands</h2>

          <CodeBlock>
            {`# Check Nginx status
sudo systemctl status nginx

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx configuration
sudo nginx -t

# Check Port 80
sudo ss -lntp | grep :80

# Node version
node -v

# npm version
npm -v`}
          </CodeBlock>
        </section>
      </main>

      <footer>React Deployment Guide • AWS EC2 • Nginx • GitHub Actions</footer>
    </>
  );
};

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, children }) => {
  return (
    <div className="step">
      <div className="step-number">{number}</div>

      <h2>{title}</h2>

      {children}
    </div>
  );
};

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
};

export default DeployReactAppPage;
