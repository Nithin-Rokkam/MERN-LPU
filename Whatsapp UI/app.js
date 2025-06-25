// Sample chat data
const chats = [
    {
        id: 1,
        name: "Self",
        // lastMessage: "Hey, how are you?",
        time: "10:30 AM",
        avatar: "👨"
    },
    {
        id: 3,
        name: "Work Group",
        // lastMessage: "Meeting at 3 PM",
        time: "Yesterday",
        avatar: "👥"
    },
    {
        id: 4,
        name: "Mom",
        // lastMessage: "Don't forget to call",
        time: "Yesterday",
        avatar: "👵"
    },
    {
        id: 5,
        name: "Dad",
        // lastMessage: "How's work going?",
        time: "2 days ago",
        avatar: "👴"
    }
];

// Sample messages for each chat
// const messages = {
//     1: [
//         { text: "Hey, how are you?", time: "10:30 AM", sent: false },
//         { text: "I'm good, thanks! How about you?", time: "10:32 AM", sent: true },
//         { text: "Pretty good! Want to grab coffee later?", time: "10:33 AM", sent: false }
//     ],
//     2: [
//         { text: "Can we meet tomorrow?", time: "9:45 AM", sent: false },
//         { text: "Sure! What time works for you?", time: "9:47 AM", sent: true }
//     ],
//     3: [
//         { text: "Meeting at 3 PM", time: "Yesterday", sent: false },
//         { text: "Got it, I'll be there", time: "Yesterday", sent: true }
//     ],
//     4: [
//         { text: "Don't forget to call", time: "Yesterday", sent: false },
//         { text: "I won't forget, Mom!", time: "Yesterday", sent: true }
//     ],
//     5: [
//         { text: "How's work going?", time: "2 days ago", sent: false },
//         { text: "It's going well, thanks for asking!", time: "2 days ago", sent: true }
//     ]
// };

let currentChatId = null;
let isMobile = window.innerWidth <= 768;
let currentView = 'chat-list'; // 'chat-list', 'chat-messages', 'menu'

// DOM elements
const chatListContainer = document.getElementById('chat-list-container');
const messagesArea = document.getElementById('messages-area');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessagesHeader = document.querySelector('.chat-messages-header');
const searchInput = document.querySelector('.search-input');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const leftMenu = document.getElementById('left-menu');
const chatList = document.getElementById('chat-list');
const chatMessagesContainer = document.getElementById('chat-messages-container');
const backToMenu = document.getElementById('back-to-menu');
const backToChats = document.getElementById('back-to-chats');
const splashScreen = document.getElementById('splash-screen');

// Initialize the app
function init() {
    renderChatList();
    setupEventListeners();
    setupResponsiveBehavior();
    showInitialView();
}

// Show initial view based on screen size
function showInitialView() {
    if (isMobile) {
        showChatList();
    } else {
        showDesktopView();
    }
}

// Show desktop view (all panels visible)
function showDesktopView() {
    chatList.style.display = 'flex';
    chatMessagesContainer.style.display = 'flex';
    leftMenu.style.position = 'static';
    leftMenu.style.left = '0';
    mobileNavToggle.style.display = 'none';
    backToMenu.style.display = 'none';
    backToChats.style.display = 'none';
}

// Show chat list (mobile)
function showChatList() {
    chatList.classList.add('show');
    chatMessagesContainer.classList.remove('show');
    leftMenu.classList.remove('show');
    currentView = 'chat-list';
    backToMenu.style.display = 'block';
    backToChats.style.display = 'none';
}

// Show chat messages (mobile)
function showChatMessages() {
    chatList.classList.remove('show');
    chatMessagesContainer.classList.add('show');
    leftMenu.classList.remove('show');
    currentView = 'chat-messages';
    backToMenu.style.display = 'none';
    backToChats.style.display = 'block';
}

// Show menu (mobile)
function showMenu() {
    leftMenu.classList.add('show');
    chatList.classList.remove('show');
    chatMessagesContainer.classList.remove('show');
    currentView = 'menu';
}

// Setup responsive behavior
function setupResponsiveBehavior() {
    window.addEventListener('resize', () => {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;
        
        if (wasMobile !== isMobile) {
            if (isMobile) {
                showChatList();
            } else {
                showDesktopView();
            }
        }
    });
}

// Render chat list
function renderChatList(filteredChats = chats) {
    chatListContainer.innerHTML = '';
    
    filteredChats.forEach(chat => {
        const chatElement = createChatElement(chat);
        chatListContainer.appendChild(chatElement);
    });
}

// Create chat element
function createChatElement(chat) {
    const chatDiv = document.createElement('div');
    chatDiv.className = 'chat-item';
    chatDiv.dataset.chatId = chat.id;
    
    chatDiv.innerHTML = `
        <div class="chat-avatar">
            <span>${chat.avatar}</span>
        </div>
        <div class="chat-info">
            <div class="chat-name">${chat.name}</div>
            <!-- <div class="chat-last-message">${chat.lastMessage}</div> -->
        </div>
        <div class="chat-time">${chat.time}</div>
    `;
    
    chatDiv.addEventListener('click', () => selectChat(chat.id));
    return chatDiv;
}

// Select a chat
function selectChat(chatId) {
    currentChatId = chatId;
    
    // Hide splash screen
    if (splashScreen) {
        splashScreen.classList.add('hidden');
    }
    
    // Update active chat in list
    document.querySelectorAll('.chat-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-chat-id="${chatId}"]`).classList.add('active');
    
    // Update header
    const chat = chats.find(c => c.id === chatId);
    chatMessagesHeader.innerHTML = `
        <button class="back-button" id="back-to-chats" style="display: ${isMobile ? 'block' : 'none'};">←</button>
        <div class="chat-avatar">
            <span>${chat.avatar}</span>
        </div>
        <div class="chat-info">
            <div class="chat-name">${chat.name}</div>
            <!-- <div class="chat-last-message">online</div> -->
        </div>
    `;
    
    // Re-attach back button event listener
    if (isMobile) {
        document.getElementById('back-to-chats').addEventListener('click', showChatList);
    }
    
    // Render messages
    renderMessages(chatId);
    
    // Enable input
    messageInput.disabled = false;
    sendButton.disabled = false;
    messageInput.focus();
    
    // Show chat messages view on mobile
    if (isMobile) {
        showChatMessages();
    }
}

// Render messages for a chat
function renderMessages(chatId) {
    const chatMessages = messages[chatId] || [];
    messagesArea.innerHTML = '';
    
    chatMessages.forEach(message => {
        const messageElement = createMessageElement(message);
        messagesArea.appendChild(messageElement);
    });
    
    // Scroll to bottom
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

// Create message element
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${message.sent ? 'sent' : 'received'}`;
    
    messageDiv.innerHTML = `
        <div class="message-bubble">
            ${message.text}
        </div>
        <div class="message-time">
            ${message.time}
        </div>
    `;
    
    return messageDiv;
}

// Send message
function sendMessage() {
    const text = messageInput.value.trim();
    if (!text || !currentChatId) return;
    
    const newMessage = {
        text: text,
        time: getCurrentTime(),
        sent: true
    };
    
    // Add message to data
    if (!messages[currentChatId]) {
        messages[currentChatId] = [];
    }
    messages[currentChatId].push(newMessage);
    
    // Update last message in chat list
    const chat = chats.find(c => c.id === currentChatId);
    chat.lastMessage = text;
    chat.time = getCurrentTime();
    
    // Re-render messages
    renderMessages(currentChatId);
    
    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Simulate reply after 1-3 seconds
    setTimeout(() => {
        const replies = [
            "That's interesting!",
            "I see what you mean",
            "Thanks for letting me know",
            "Got it!",
            "Sounds good to me",
            "I'll get back to you on that"
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        const replyMessage = {
            text: randomReply,
            time: getCurrentTime(),
            sent: false
        };
        
        messages[currentChatId].push(replyMessage);
        renderMessages(currentChatId);
        
        // Update chat list
        chat.lastMessage = randomReply;
        chat.time = getCurrentTime();
        renderChatList();
    }, 1000 + Math.random() * 2000);
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
}

// Setup event listeners
function setupEventListeners() {
    // Send button click
    sendButton.addEventListener('click', sendMessage);
    
    // Enter key to send
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Auto-resize textarea
    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 100) + 'px';
        
        // Enable/disable send button
        sendButton.disabled = !messageInput.value.trim();
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredChats = chats.filter(chat => 
            chat.name.toLowerCase().includes(searchTerm) ||
            chat.lastMessage.toLowerCase().includes(searchTerm)
        );
        renderChatList(filteredChats);
    });
    
    // Menu item clicks
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
            item.classList.add('active');
            
            // On mobile, close menu after selection
            if (isMobile) {
                leftMenu.classList.remove('show');
                showChatList();
            }
        });
    });
    
    // Mobile navigation
    mobileNavToggle.addEventListener('click', showMenu);
    
    // Back button navigation
    backToMenu.addEventListener('click', showMenu);
    backToChats.addEventListener('click', showChatList);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMobile && currentView === 'menu') {
            if (!leftMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                leftMenu.classList.remove('show');
                showChatList();
            }
        }
    });
    
    // Touch gestures for mobile
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Swipe left to go back (if we're in chat messages)
        if (isMobile && currentView === 'chat-messages' && diffX > 50 && Math.abs(diffY) < 50) {
            showChatList();
        }
        
        // Swipe right to open menu (if we're in chat list)
        if (isMobile && currentView === 'chat-list' && diffX < -50 && Math.abs(diffY) < 50) {
            showMenu();
        }
        
        startX = 0;
        startY = 0;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
