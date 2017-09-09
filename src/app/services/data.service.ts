import { Injectable } from '@angular/core';
import {Question} from '../models/Question'

@Injectable()
export class DataService {

  questions: Question[];
  constructor() { 
    /*
    this.questions = [
      {
        text: 'What is the name of your cat?',
        answer: 'Kulka',
        hide: true
      },
      {
        text: 'What is the color of my car?',
        answer: 'Ewd',
        hide: true
      },
      {
        text: 'Who is the best?',
        answer: 'Kuba',
        hide: true
      }
    ]
    */
  }
  getQuestions():Question[]
  {
    if (localStorage.getItem('questions') === null)
    {
      this.questions = [];
    }
    else
    {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  addQuestion(question: Question)
  {
    if (localStorage.getItem('questions') === null)
    {
      this.questions = [];
      this.questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(this.questions));
    }
    else
    {
      this.questions = JSON.parse(localStorage.getItem('questions'));
      this.questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(this.questions));
    }
  }
  deleteQuestion(question: Question)
  {
    this.questions.splice(this.questions.indexOf(question), 1);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }
}
