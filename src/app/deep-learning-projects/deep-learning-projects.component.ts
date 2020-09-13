import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-deep-learning-projects',
  templateUrl: './deep-learning-projects.component.html',
  styleUrls: ['./deep-learning-projects.component.css']
})
export class DeepLearningProjectsComponent implements OnInit {
  tech_stack = [
    "Python",
    "OpenCV",
    "Tensorflow",
    "Keras",
    "Convolutional Neural Networks",
    "Deep Neural Networks",
    "Udacity Self Driving Car Simulator",
    "Google Colab"
  ]
  project_info = [
    {
      "github-link": "https://github.com/adipro7/Udacity-Self-Driving-Car-Simulation",
      "image": "../../assets/images/self-drive.gif",
      "title": "Udacity Self Drving Car Simulation",
      "summary": ["Simulated a Self-Driving Car.",
                  "The better you drive- the better is your model!",
      ],
      "tech-stack": [
        "Python 3",
        "Keras",
        "OpenCV"
      ]
    },
    {
      "github-link": "https://github.com/adipro7/Handwritten-Captcha-Recognition",
      "image": "../../assets/images/captcha-solver.gif",
      "title": "Handwritten-Captcha Solver",
      "summary": ["Made a real-time Captcha Solver with ~92% accuracy",
                  "A CNN Model with EMNIST byMerge Data Set"
      ],
      "tech-stack": [
        "Python 3",
        "Tensorflow",
        "Keras",
        "Google Colab",
        "OpenCV"
      ]
    }
  ];
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }
  onClick()
  {
    this.router.navigate(['/home']);
  }
}
