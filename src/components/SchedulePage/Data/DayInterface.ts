interface KeyNote {
    duration: string;
    heading: string;
    mentor: string;
    inst: string;
    file: string;
    bgcolor: string;
  }
  
  interface Introduction {
    duration: string;
    heading: string;
    mentor: string;
    inst: string;
    bgcolor: string;
  }
  
  interface Session {
    sessionDuration: string;
    sessionNumber: string;
    sessionType: string;
    bgColor: string;
  }
  
  interface Lunch {
    duration: string;
    heading: string;
    description: string;
    bgcolor: string;
  }
  
  interface SessionData {
    session: Session;
    introduction?: Introduction;
    keyNote?: KeyNote[];
    lunch?: Lunch;
  }
  
  interface DayInterface {
    date: string;
    bgColor: string;
    sessions: SessionData[];
  }
  
  
  