import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  
  achievements=[
    /*{
      "title": "Incoming Summer Intern",
      "year": "21",
      "logo": "../../assets/images/oracle.png",
      "event type": "ORACLE",
      "summary": "Member Technology Staff(MTS) Intern at Server Technology Group.",
      "certificate": "achievements",
      "fade": "Left"
    },*/
    {
      "title": "INSPIRE Scholarship",
      "year": "18",
      "logo": "../../assets/images/inspire.jpeg",
      "event type": "Class XII Board Examinations",
      "summary": "Awarded for being among top 1 percentile students.",
      "certificate": "achievements",
      "fade": "Right"
    },
    {
      "title": "Boeing IIT National Aeromodelling Competition",
      "year": "19",
      "logo": "../../assets/images/ktj.jpeg",
      "event type": "Kshitij, IIT Kharagpur",
      "summary": "Qualified first round of the event.",
      "certificate": "achievements",
      "fade": "Left"
    },
    {
      "title": "Digisim, Udyam",
      "year": "20",
      "logo": "../../assets/images/digisim.png",
      "event type": "Digital Electronics Event",
      "summary": "Secured 3rd position in the event. Made Tetris game using Digital Logic.",
      "certificate": "../../assets/achievements/Digisim Merit.pdf",
      "fade": "Left"
    },
    {
      "title": "Funckit, Udyam",
      "year": "19",
      "logo": "../../assets/images/funckit.svg",
      "event type": "Digital Electronics Event",
      "summary": "Secured 3rd position in the event.",
      "certificate": "../../assets/achievements/funckit merit.pdf",
      "fade": "Right"
    },
    {
      "title":"Pixelate, Technex",
      "year":"20",
      "logo":"../../assets/images/technex.png",
      "event type":"Image Processing Event",
      "summary":"Secured 2nd position in the event.",
      "certificate":"../../assets/achievements/Pixelate 2020 merit.pdf",
      "fade":"Left"
    },
    {
      "title": "Pixelate, Technex",
      "year": "19",
      "logo": "../../assets/images/technex.png",
      "event type": "Image Processing Event",
      "summary": "Secured 2nd position in the event.",
      "certificate": "../../assets/achievements/Pixelate 2019 merit.pdf",
      "fade": "Right"
    },
    /*{
      "title": "Changed Department on the basis of merit",
      "year": "18",
      "logo": "../../assets/images/iit bhu.png",
      "event type": "IIT BHU, Varanasi",
      "summary": "On the basis of my 1st semester CPI.",
      "certificate": "achievements",
      "fade": "Right"
    }*/
  ];
  
  achieve_count2=[0,1]
  achieve_count1=[0,2,4]
  certifications=[
    {
      "title": "Deep Learning and Neural Networks",
      "year": "May 2020",
      "logo": "../../assets/images/dlai.png",
      "issue": "deeplearning.ai",
      "id":"53T2ZZ3HFHN6",
      "certificate": "../../assets/achievements/deep_learning.pdf",
      "fade": "Left"
    },
    {
      "title": "Java(Basic)",
      "year": "June 2020",
      "logo": "../../assets/images/hrank.png",
      "issue": "Hackerrank",
      "id": "1BBAAD23911B",
      "certificate": "../../assets/achievements/Java(Basic) Hackerrank.pdf",
      "fade": "Right"
    },
    {
      "title": "Problem Solving(Basic)",
      "year": "June 2020",
      "logo": "../../assets/images/hrank.png",
      "issue": "Hackerrank",
      "id": "C8A143DF6032",
      "certificate": "../../assets/achievements/Problem Solving(Basic) Hackerrank.pdf",
      "fade": "Left"
    },
    {
      "title": "Problem Solving(Intermediate)",
      "year": "June 2020",
      "logo": "../../assets/images/hrank.png",
      "id":"FAAF39520D5F",
      "issue":"Hackerrank",
      "certificate": "../../assets/achievements/Problem Solving(Intermediate) Hackerrank.pdf",
      "fade": "Right"
    }
  ];

  certi_count1=[0,2]
  certi_count2=[0,1]

  volunteering=[
    {
      "title":"Executive, Events Team",
      "event":"D' Aeroglisseur, Technex'20- The techno-management fest.",
      "time period":"Jan'20-Feb'20",
      "summary":"Helped in smooth organization of the Hovercraft event in Technex'20.",
      "logo":"../../assets/images/technex.png",
      "fade":"Left"
    },
    {
      "title": "Event Co-cordinator",
      "event": "Prof. Veer Bhadra Mishra Memorial Airshow, Technex'19.",
      "time period": "Feb'19-Mar'19",
      "summary": "Helped in smooth organization of Airshow, Technex, IIT BHU, Varanasi.",
      "logo": "../../assets/images/technex.png",
      "fade": "Right"
    },
    {
      "title": "Subject Expert",
      "event": "chegg.com",
      "time period": "Mar'20-Present",
      "summary": "Solving doubts of students in Chemistry as a time-pass.",
      "logo":"../../assets/images/chegg.jpg",
      "fade": "Left"
    },
    {
      "title": "Student Guide",
      "event": "Student Counselling Services.",
      "time period": "July'19-August'19",
      "summary": "Helped freshers in becoming comfortable with the college atmosphere.",
      "logo":"../../assets/images/scs.png",
      "fade": "Right"
    },
    {
      "title": "Student Mentor",
      "event": "Vision'20, Robotics Club, IIT BHU, Varanasi.",
      "time period": "Dec'19-Jan'20",
      "summary": "Mentored freshers and helped in smooth organization of the Image Processing event.",
      "logo": "../../assets/images/robotics.jpeg",
      "fade": "Left"
    },
    {
      "title": "Student Mentor",
      "event": "Aviator'19, Aero-modelling Club, IIT BHU, Varanasi.",
      "time period": "Nov'19-Dec'19",
      "summary": "Mentored freshers and helped in smooth organization of the RC Plane event.",
      "logo":"../../assets/images/amc.png",
      "fade": "Right"
    }
  ]
  vol_count1=[0,2,4]
  vol_count2=[0,1]
  constructor(
    private router:Router
  ) {
   }

  ngOnInit():void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }
  onClick() {
    this.router.navigate(['/home']);
  }

}
