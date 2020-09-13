import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tab_info=[
    ['Competitive', 'Programming', 'services color-5', 'fa fa-desktop','/competitive-programming-profiles'],
    ['Achievements &','Certifications', 'services color-3', 'fa fa-trophy','/achievements'],
    ['Download my', 'RESUME', 'services color-1', 'fa fa-cloud-download','/resume'],
    ['Web Development','Projects', 'services color-4', 'fa fa-code','/web-dev-projects'],
    ['Deep Learning','Projects', 'services color-5', 'fa fa-line-chart','/deep-learning-projects'],
    ['Image Processing','Projects', 'services color-2', 'fa fa-eye','/image-processing-projects'], 
  ];
  skills=[
    ['Programming',
      ['C/C++', 80, 'fadeInLeft',6],
      ['Python', 65, 'fadeInRight', 2],
      ['Java', 60, 'fadeInLeft', 5],
      ['JavaScript', 35, 'fadeInRight', 3],
    ],
    ['Frameworks/Utilities/Technologies',
      ['HTML/CSS', 70, 'fadeInLeft', 1],
      ['Git', 60, 'fadeInRight', 6],
      ['Angular 9', 40, 'fadeInLeft', 7],
      ['Express JS', 40, 'fadeInRight', 3],
      ['OpenCV', 55, 'fadeInLeft', 4],
      ['AWS EC2 Image Instance', 45, 'fadeInRight',5],
      ['Keras', 50, 'fadeInLeft',2],
      ['Tensorflow', 50, 'fadeInRight',3],
      ['Arduino', 75, 'fadeInLeft',6],
      ['Proteus Simulation Software for Digital Circuits', '85', 'fadeInRight',4]
    ],
    ['Domains of Interest',
      ['Data Structures', 80, 'fadeInLeft', 2],
      ['Algorithms', 75, 'fadeInRight', 3],
      ['Object-Oriented Programming(OOPs)', 85, 'fadeInLeft', 6],
      ['Image Processing', 55, 'fadeInRight', 4],
      ['Web Developement', 45, 'fadeInLeft', 5],
      ['Deep Learning', 35, 'fadeInRight', 1],
      ['Digital Electronics', 75, 'fadeInLeft', 2],
      ['Ariel-Robotics', 60, 'fadeInRight', 4]
    ]
  ];
  education=[
    [
      "Left",
      "mortar-board",
      "Bachelors in Electronics Engineering",
      "Indian Institute of Technology (Banaras Hindu University), Varanasi",
      "Current CGPA: ",
      "9.25/10",
      "Key Courses undertaken: Ubiquitous Computing, Basic Computer Programming,Digital Electronics, Digital Communication, Microprocessor Engineering",
      "Activites and Clubs: Aeromodelling Club, Robotics Club",
    ],
    [
      "Right",
      "university",
      "Intermediate and High School",
      "Dr. Virendra Swarup Education Centre, Kidwai Nagar, Kanpur",
      "Percentage: ",
      "97.00% (XIIth), 97.40% (Xth)",
      "Courses undertaken: Physics, Chemistry, Mathematics, Computer Science"
    ]
  ];
  constructor(
    private router:Router,
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }
  onClick(path:string){
    this.router.navigate([path]);
  }
  home(){
    this.router.navigate(['/home']);
  }
}
