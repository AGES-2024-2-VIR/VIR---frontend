import React from 'react';
import PropTypes from 'prop-types';
import './ReadingHeader.css';

const ReadingHeader = ({ chapterTitle, onQuit, totalPages, currentPage}) => {
  return (
    <header className="reading-header">
      <div className="chapter-info">
        <span className="chapter-title">{chapterTitle}</span>
        <button className="quit-button" onClick={onQuit}>
          X
        </button>
      </div>
      <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${(currentPage/totalPages)*100}%` }}></div>
        </div>
    </header>
  );
};

ReadingHeader.propTypes = {
  chapterTitle: PropTypes.string.isRequired,
  onQuit: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ReadingHeader;

// TODO;  
/*  
Não deu tempo de seguir, segue breve resumo do que foi feito e como utilizar 

Explanation:

ReadingHeader.js:
This component receives chapterTitle, onQuit (a function to handle the quit action), and progress (a number representing reading progress) as props.
It renders the chapter title, a progress bar, and a "X" button.
The progress bar's width is dynamically set using inline styles based on the progress prop.
ReadingHeader.css:
This file contains the CSS styles for the header component. You can customize the appearance (colors, fonts, sizes, etc.) to match your application's design.
How to Use:

Import the component: In the component where you display the book content, import the ReadingHeader:

import ReadingHeader from './ReadingHeader/ReadingHeader'; 
Pass props and render:

const BookPage = () => {
  const [currentChapter, setCurrentChapter] = useState('Chapter 1');
  const [readingProgress, setReadingProgress] = useState(30); // Example progress

  const handleQuit = () => {
    // Logic to navigate back to the bookshelf
  };

  return (
    <div>
      <ReadingHeader 
        chapterTitle={currentChapter} 
        onQuit={handleQuit} 
        progress={readingProgress} 
      />
      { Rest of your book content }
      </div>
    );
  };
  Key Points:
  
  State Management: You'll likely manage the currentChapter and readingProgress using state management (like React's useState or a library like Redux) within the component that renders the book content.
  Navigation: Implement the handleQuit function to handle the logic for navigating back to the bookshelf page (e.g., using React Router).
  Progress Calculation: You'll need to implement the logic to calculate the readingProgress based on the user's position within the chapter.
  This setup provides a basic structure for your reading header component. You can further enhance it with features like:
  
  Chapter Navigation: Add buttons to navigate to the previous or next chapter.
  Progress Saving: Implement logic to save the user's reading progress.
  Responsive Design: Ensure the header looks good on different screen sizes.
  */