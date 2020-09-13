import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {CpApiService} from '../cp-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-competitive-programming-profiles',
  templateUrl: './competitive-programming-profiles.component.html',
  styleUrls: ['./competitive-programming-profiles.component.css']
})
export class CompetitiveProgrammingProfilesComponent implements OnInit {
  tech_stack=[
    "C",
    "C++",
    "Java",
    "Python",
    "Data Structures",
    "Algorithms"
  ]
  platform=[
    {
      "platform": "Codeforces",
      "handle":"adipro1167",
      "fade":"Left",
      "logo": "../../assets/images/cf.webp",
      "profile": "https://codeforces.com/profile/adipro1167",
      "rating":1358,
      "solved":275,
      "max_rating":1506,
      "cc":"",
      "mc":""
    },
    {
      "platform": "Codechef",
      "handle": "adipro167",
      "fade": "Right",
      "logo": "../../assets/images/cc.jpg",
      "profile": "https://www.codechef.com/users/adipro167",
      "rating": 1840,
      "solved": 48,
      "max_rating": 1882,
      "cc": "",
      "mc": ""
    },
    {
      "platform": "Leetcode",
      "handle": "adipro1167",
      "fade": "Left",
      "logo": "../../assets/images/lc.png",
      "profile": "https://leetcode.com/adipro1167/",
      "rating": 0,
      "solved": 241,
      "max_rating": 0,
      "cc": "",
      "mc": ""
    },
    {
      "platform": "Hackerearth",
      "handle": "adipro1167",
      "fade": "Right",
      "logo": "../../assets/images/hackerearth.jpg",
      "profile": "https://www.hackerearth.com/@adipro1167",
      "rating": 1420,
      "solved": 13,
      "max_rating": 1559,
      "cc": "",
      "mc": ""
    },
    {
      "platform": "Atcoder",
      "handle": "adipro167",
      "fade": "Left",
      "logo": "../../assets/images/atcoder.png",
      "profile": "https://atcoder.jp/users/adipro167",
      "rating": 567,
      "solved": 17,
      "max_rating": 567,
      "cc": "",
      "mc": ""
    },
    {
      "platform": "Hackerrank",
      "handle": "adipro1167",
      "fade": "Right",
      "logo": "../../assets/images/hrank.png",
      "profile": "https://www.hackerrank.com/adipro1167",
      "rating": 0,
      "solved": 37,
      "max_rating": 0,
      "cc": "",
      "mc": ""
    }
  ];
  plat_count1=[0,2,4];
  plat_count2=[0,1];
  ratings={
    "Codeforces":{},
    "Codechef":{},
    "Leetcode":{},
    "Hackerearth":{},
    "Atcoder":{},
    "Hackerrank":{}
  }
  stopstalk=[
    "CodeForces",
    "CodeChef",
    "LeetCode",
    "Hackerearth",
    "AtCoder",
    "HackerRank"
  ];
  total=0;
  solved_count:any;
  size = Object.keys(this.platform).length;
  viewRatings: Subscription;
  viewSolved:Subscription;
  str: string;
  arr:any;
  constructor(
    private cp_api:CpApiService,
    private router:Router
  ) { }
  onClick() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    for(let i=0;i<this.size;i++){
      this.total=this.total+this.platform[i]["solved"];
      if(i==5)
      continue;
      this.str = this.platform[i]["platform"].toLowerCase();
      this.cp_api.platform=this.str;
      this.cp_api.username=this.platform[i]["handle"];
      this.ratingSuccess(i);
    }
  }

  ratingSuccess(i){
    if (this.platform[i]['rating'] > 0 && this.platform[i]['rating'] < 1200)
      this.platform[i]['cc'] = "#804000";
    else if (this.platform[i]['rating'] >= 1200 && this.platform[i]['rating'] < 1400)
      this.platform[i]['cc'] = "green";
    else if (this.platform[i]['rating'] >= 1400 && this.platform[i]['rating'] < 1600)
      this.platform[i]['cc'] = "#03A89E";
    else if (this.platform[i]['rating'] >= 1600 && this.platform[i]['rating'] < 1800)
      this.platform[i]['cc'] = "blue";
    else if (this.platform[i]['rating'] >= 1800 && this.platform[i]['rating'] < 2000)
      this.platform[i]['cc'] = "#684273";
    else if (this.platform[i]['rating'] >= 2000 && this.platform[i]['rating'] < 2200)
      this.platform[i]['cc'] = "#FF8C00";
    if (this.platform[i]['max_rating'] > 0 && this.platform[i]['max_rating'] < 1200)
      this.platform[i]['mc'] = "#804000";
    else if (this.platform[i]['max_rating'] >= 1200 && this.platform[i]['max_rating'] < 1400)
      this.platform[i]['mc'] = "green";
    else if (this.platform[i]['max_rating'] >= 1400 && this.platform[i]['max_rating'] < 1600)
      this.platform[i]['mc'] = "#03A89E";
    else if (this.platform[i]['max_rating'] >= 1600 && this.platform[i]['max_rating'] < 1800)
      this.platform[i]['mc'] = "blue";
    else if (this.platform[i]['max_rating'] >= 1800 && this.platform[i]['max_rating'] < 2000)
      this.platform[i]['mc'] = "#684273";
    else if (this.platform[i]['max_rating'] >= 2000 && this.platform[i]['max_rating'] < 2200)
      this.platform[i]['mc'] = "#FF8C00";
  }
}
