import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from difflib import SequenceMatcher
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import fitz  # PyMuPDF

def read_file(filename):
    try:
        if filename.endswith('.pdf'):
            text = read_pdf_file(filename)
        else:
            with open(filename, 'r', encoding='utf-8') as file:
                text = file.read()
        return text
    except Exception as e:
        messagebox.showerror("File Read Error", f"Error reading file {filename}: {e}")
        return None

def read_pdf_file(filename):
    try:
        doc = fitz.open(filename)
        text = ""
        for page in doc:
            text += page.get_text()
        return text
    except Exception as e:
        messagebox.showerror("PDF Read Error", f"Error reading PDF file {filename}: {e}")
        return None

def calculate_relevance(text1, text2):
    similarity_ratio = SequenceMatcher(None, text1, text2).ratio()
    return similarity_ratio * 100

def on_plot_hover(event):
    if event.inaxes == bar_ax:
        for bar in bar_ax.containers:
            for rect in bar:
                if rect.contains(event)[0]:
                    rect.set_alpha(0.7)
                    value = rect.get_height()
                    bar_ax.annotate(f"{value:.2f}%", (rect.get_x() + rect.get_width() / 2, rect.get_height()), 
                                    ha='center', va='bottom')
                else:
                    rect.set_alpha(1)
    else:
        pass

def analyze_data():
    file1_path = file1_var.get()
    file2_path = file2_var.get()
    
    if file1_path and file2_path:
        file1_data = read_file(file1_path)
        file2_data = read_file(file2_path)
        
        if file1_data is not None and file2_data is not None:
            relevance_percentage = calculate_relevance(file1_data, file2_data)
            relevance_label.config(text=f"Relevance: {relevance_percentage:.2f}%")
            display_charts(relevance_percentage)
        else:
            relevance_label.config(text="Error reading files.")
    else:
        messagebox.showwarning("Input Error", "Please select both files.")

def browse_file(var):
    filename = filedialog.askopenfilename(filetypes=[("Text files", "*.txt"), ("PDF files", "*.pdf")])
    var.set(filename)

def display_charts(relevance_percentage):
    for widget in chart_frame.winfo_children():
        widget.destroy()

    bg_color = "#2E2E2E" if dark_mode.get() else "#FFFFFF"
    text_color = "#FFFFFF" if dark_mode.get() else "#000000"

    # Pie chart
    pie_figure = plt.Figure(figsize=(4, 3), dpi=100, facecolor=bg_color)
    pie_ax = pie_figure.add_subplot(111)
    sizes = [relevance_percentage, 100 - relevance_percentage]
    colors = ['#FFD700', '#FF6347'] if dark_mode.get() else ['gold', 'lightcoral']
    explode = (0.1, 0)
    pie_ax.pie(sizes, explode=explode, colors=colors, shadow=True, startangle=140)
    pie_ax.axis('equal')
    pie_ax.set_title('Relevance Distribution', color=text_color)
    pie_canvas = FigureCanvasTkAgg(pie_analyze_button = ttk.Button(frame, text="Analyze", command=analyze_data, style='Light.TButton')
    analyze_button.grid(row=3, columnspan=3, pady=(5, 10), sticky=tk.EW)
    analyze_button.bind("<Enter>", on_enter)
    analyze_button.bind("<Leave>", on_leave)

    dark_mode_label = ttk.Label(frame, text="Dark Mode:", style='TLabel', background="#FFFFFF", foreground="#000000")
    dark_mode_label.grid(row=4, column=0, pady=(10, 5))

    dark_mode_switch = ttk.Checkbutton(frame, variable=dark_mode, command=toggle_dark_mode)
    dark_mode_switch.grid(row=4, column=1, columnspan=2, pady=(10, 5), sticky=tk.W)

    chart_frame = ttk.Frame(root, style='Light.TFrame')
    chart_frame.pack(fill=tk.BOTH, expand=True)

    toggle_dark_mode()

    root.mainloop()

