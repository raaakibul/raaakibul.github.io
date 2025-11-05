// Research paper content data
const researchContent = {
  "attention-paper": {
    title: "Attention Is All You Need",
    authors:
      "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin",
    venue: "NeurIPS 2017",
    year: "2017",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "Attention Is All You Need" introduced the Transformer architecture, a novel neural network architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. This architecture has become the foundation for modern language models and has revolutionized natural language processing.</p>
                    
                    <h3>Key Contributions</h3>
                    <p>The primary contribution of this paper is the Transformer architecture, which relies entirely on self-attention to compute representations of its input and output without using sequence-aligned recurrent architectures. The Transformer has shown superior performance on machine translation tasks while requiring significantly less training time.</p>
                    
                    <h3>Architecture Overview</h3>
                    <p>The Transformer consists of an encoder and a decoder, each composed of a stack of identical layers. The encoder maps an input sequence of symbol representations to a sequence of continuous representations, while the decoder generates an output sequence one element at a time.</p>
                    
                    <h3>Self-Attention Mechanism</h3>
                    <p>Self-attention is a mechanism that relates different positions of a single sequence to compute a representation of the sequence. It allows the model to weigh the importance of different words in the input sequence when encoding each word. The paper introduces scaled dot-product attention, which computes the attention scores using dot products of queries with keys.</p>
                    
                    <h3>Multi-Head Attention</h3>
                    <p>Instead of performing a single attention function, the Transformer uses multi-head attention, which allows the model to jointly attend to information from different representation subspaces at different positions. This enables the model to capture various aspects of the input sequence.</p>
                    
                    <h3>Positional Encoding</h3>
                    <p>Since the Transformer contains no recurrence or convolution, it must use positional encodings to inject information about the relative or absolute position of the tokens in the sequence. The paper uses sine and cosine functions of different frequencies to create positional encodings.</p>
                    
                    <h3>Experimental Results</h3>
                    <p>The Transformer achieved state-of-the-art results on English-to-German and English-to-French translation tasks. It outperformed existing models while requiring less training time. The model's ability to be trained in parallel and its superior performance on long sequences were significant advantages.</p>
                    
                    <h3>Impact and Legacy</h3>
                    <p>The Transformer architecture has had a profound impact on natural language processing and beyond. It has become the foundation for models like BERT, GPT, and T5, which have achieved state-of-the-art results on a wide range of NLP tasks. The architecture has also been adapted for other domains, including computer vision and speech recognition.</p>
                    
                    <h3>Criticisms and Limitations</h3>
                    <p>Despite its success, the Transformer has some limitations. It can be computationally expensive for very long sequences, and the self-attention mechanism has quadratic complexity with respect to sequence length. Additionally, the model requires large amounts of data to train effectively, which can be a barrier for some applications.</p>
                    
                    <h3>Conclusion</h3>
                    <p>"Attention Is All You Need" represents a significant milestone in the development of neural network architectures. By demonstrating that attention mechanisms alone can achieve superior performance on sequence transduction tasks, the paper opened new avenues for research and has influenced countless subsequent works in natural language processing and artificial intelligence.</p>
                `,
  },
  "resnet-paper": {
    title: "Deep Residual Learning for Image Recognition",
    authors: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
    venue: "CVPR 2016",
    year: "2016",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "Deep Residual Learning for Image Recognition" introduced ResNet (Residual Network), a groundbreaking architecture that addressed the degradation problem in deep neural networks. This work enabled the training of neural networks with unprecedented depth, achieving state-of-the-art results on various image recognition tasks.</p>
                    
                    <h3>The Degradation Problem</h3>
                    <p>Before ResNet, researchers observed that as neural networks became deeper, their accuracy would saturate and then degrade rapidly. This was surprising because deeper networks should theoretically be able to learn at least as well as shallower networks. The authors identified this as the "degradation problem," where deeper networks are harder to optimize.</p>
                    
                    <h3>Residual Learning Framework</h3>
                    <p>The key innovation of ResNet is the residual learning framework. Instead of learning the underlying mapping directly, ResNet learns the residual mapping with reference to the layer inputs. Formally, instead of hoping each few stacked layers directly fit a desired underlying mapping, they explicitly let these layers fit a residual mapping.</p>
                    
                    <h3>Identity Mapping by Shortcuts</h3>
                    <p>ResNet uses shortcut connections that skip one or more layers. These connections perform identity mapping, and their outputs are added to the outputs of the stacked layers. This design makes it easy for the network to learn identity mappings by simply setting the residual to zero, which is easier than learning a new identity mapping.</p>
                    
                    <h3>Network Architectures</h3>
                    <p>The paper presented several ResNet architectures with different depths: ResNet-18, ResNet-34, ResNet-50, ResNet-101, and ResNet-152. The deeper architectures used bottleneck designs to reduce computational complexity. These architectures achieved significant improvements in accuracy on the ImageNet dataset.</p>
                    
                    <h3>Experimental Results</h3>
                    <p>ResNet-152 achieved a top-5 error rate of 3.57% on the ImageNet test set, winning first place in the ILSVRC 2015 competition. The ensemble of ResNets achieved even better results. The paper also demonstrated the effectiveness of ResNet on other datasets, including CIFAR-10 and PASCAL VOC.</p>
                    
                    <h3>Analysis of Residual Networks</h3>
                    <p>The authors provided extensive analysis of why residual networks work so well. They showed that residual networks are easier to optimize than plain networks and that the depth of residual networks is crucial for their performance. They also demonstrated that residual networks can be viewed as an ensemble of many relatively shallow networks.</p>
                    
                    <h3>Impact and Legacy</h3>
                    <p>ResNet has had a profound impact on deep learning and computer vision. It has become one of the most widely used architectures for image recognition tasks and has been adapted for many other applications. The residual learning concept has influenced numerous subsequent architectures and has become a standard technique in deep learning.</p>
                    
                    <h3>Limitations and Future Directions</h3>
                    <p>Despite its success, ResNet has some limitations. Very deep ResNets can still be computationally expensive, and the residual connections may not be optimal for all tasks. Future research has explored variations of residual connections and alternative ways to build deep networks.</p>
                    
                    <h3>Conclusion</h3>
                    <p>"Deep Residual Learning for Image Recognition" represents a significant breakthrough in deep learning. By introducing the residual learning framework, the authors solved the degradation problem and enabled the training of very deep neural networks. This work has had a lasting impact on the field and continues to influence research in deep learning and computer vision.</p>
                `,
  },
  "bert-paper": {
    title:
      "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
    venue: "NAACL-HLT 2019",
    year: "2019",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" introduced BERT (Bidirectional Encoder Representations from Transformers), a language representation model that revolutionized natural language processing. BERT achieved state-of-the-art results on eleven natural language processing tasks.</p>
                    
                    <h3>Language Model Pre-training</h3>
                    <p>Before BERT, most language models were unidirectional, meaning they could only use context from one direction (either left-to-right or right-to-left). BERT introduced bidirectional pre-training, allowing the model to learn from both left and right context simultaneously. This bidirectional context is crucial for many language understanding tasks.</p>
                    
                    <h3>The BERT Model</h3>
                    <p>BERT uses the Transformer architecture introduced by Vaswani et al. (2017). It consists of a stack of Transformer encoders, with two model sizes: BERT-Base (12 layers, 768 hidden units, 12 attention heads) and BERT-Large (24 layers, 1024 hidden units, 16 attention heads). The model is pre-trained on large amounts of text using two unsupervised tasks: Masked Language Model (MLM) and Next Sentence Prediction (NSP).</p>
                    
                    <h3>Masked Language Model</h3>
                    <p>In the Masked Language Model task, a random sample of tokens in the input sequence is replaced with a special [MASK] token. The model then tries to predict the original tokens based only on the context provided by the non-masked tokens. This forces the model to learn bidirectional representations.</p>
                    
                    <h3>Next Sentence Prediction</h3>
                    <p>The Next Sentence Prediction task involves predicting whether two sentences in the input are consecutive in the original text. This task helps the model understand the relationship between sentences, which is important for tasks like question answering and natural language inference.</p>
                    
                    <h3>Fine-tuning BERT</h3>
                    <p>After pre-training, BERT can be fine-tuned for specific tasks with minimal task-specific modifications. For each task, the BERT model is initialized with the pre-trained parameters, and all parameters are fine-tuned using labeled data from the task. This approach has proven highly effective across a wide range of NLP tasks.</p>
                    
                    <h3>Experimental Results</h3>
                    <p>BERT achieved state-of-the-art results on eleven natural language processing tasks, including GLUE (General Language Understanding Evaluation), SQuAD (Stanford Question Answering Dataset), and MNLI (Multi-Genre Natural Language Inference). These results demonstrated the power of bidirectional pre-training for language understanding.</p>
                    
                    <h3>Analysis of BERT</h3>
                    <p>The authors provided extensive analysis of BERT, including ablation studies to understand the importance of different components. They showed that both the bidirectional nature of the model and the pre-training tasks were crucial to its success. They also analyzed the attention patterns in BERT, revealing how the model captures linguistic phenomena.</p>
                    
                    <h3>Impact and Legacy</h3>
                    <p>BERT has had a profound impact on natural language processing. It has become a standard baseline for many NLP tasks and has inspired numerous variations and improvements. The concept of pre-training language models on large text corpora and then fine-tuning for specific tasks has become a dominant paradigm in NLP.</p>
                    
                    <h3>Limitations and Future Directions</h3>
                    <p>Despite its success, BERT has some limitations. It can be computationally expensive to train and deploy, especially the large version. The model also requires significant amounts of data for pre-training, which may not be available for all languages. Future research has explored more efficient variants of BERT and ways to adapt it to low-resource scenarios.</p>
                    
                    <h3>Conclusion</h3>
                    <p>"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" represents a major milestone in natural language processing. By introducing bidirectional pre-training and demonstrating its effectiveness across a wide range of tasks, the paper established a new paradigm for language understanding that continues to influence research and applications in NLP.</p>
                `,
  },
  "data-effectiveness": {
    title: "The Unreasonable Effectiveness of Data",
    authors: "Alon Halevy, Peter Norvig, Fernando Pereira",
    venue: "IEEE Intelligent Systems",
    year: "2009",
    content: `
                    <h3>Introduction</h3>
                    <p>"The Unreasonable Effectiveness of Data" is a seminal paper that argues that simple models with massive data can outperform complex models with limited data. The authors, researchers at Google, provide evidence from various domains to support their thesis that data quantity often trumps algorithmic sophistication.</p>
                    
                    <h3>The Central Thesis</h3>
                    <p>The central argument of the paper is that as the amount of available data increases, the performance of machine learning algorithms improves, often surpassing more sophisticated algorithms trained on less data. The authors suggest that for many problems, the focus should shift from developing more complex algorithms to acquiring and utilizing larger datasets.</p>
                    
                    <h3>Historical Context</h3>
                    <p>The paper references Eugene Wigner's 1960 essay "The Unreasonable Effectiveness of Mathematics in the Natural Sciences," drawing a parallel between the effectiveness of mathematics in physics and the effectiveness of data in machine learning. The authors suggest that just as mathematics provides an unexpectedly powerful framework for understanding the physical world, data provides an unexpectedly powerful framework for solving complex problems.</p>
                    
                    <h3>Case Studies</h3>
                    <p>The paper presents several case studies to support its thesis:</p>
                    <ul>
                        <li><strong>Machine Translation</strong>: Simple statistical translation models trained on massive amounts of parallel text outperformed more sophisticated linguistic approaches.</li>
                        <li><strong>Speech Recognition</strong>: Large vocabulary continuous speech recognition systems improved dramatically with the availability of more training data.</li>
                        <li><strong>Computer Vision</strong>: Object recognition systems benefited more from additional training examples than from algorithmic improvements.</li>
                    </ul>
                    
                    <h3>The Role of Algorithms</h3>
                    <p>While emphasizing the importance of data, the authors do not dismiss the role of algorithms. They acknowledge that algorithms are necessary to process and learn from data, but argue that the performance gains from additional data often outweigh the gains from algorithmic improvements. They suggest that the focus should be on developing algorithms that can effectively utilize large amounts of data.</p>
                    
                    <h3>Data-Centric AI</h3>
                    <p>The paper foreshadowed the concept of data-centric AI, an approach that emphasizes the importance of data quality and quantity in machine learning. The authors suggest that for many problems, the bottleneck is not the algorithm but the availability of sufficient and high-quality data.</p>
                    
                    <h3>Implications for Research</h3>
                    <p>The paper has significant implications for machine learning research. It suggests that researchers should focus more on data acquisition, cleaning, and management, and less on developing increasingly complex algorithms. It also implies that benchmark datasets should be large and representative of real-world problems.</p>
                    
                    <h3>Criticisms and Limitations</h3>
                    <p>While the paper makes a compelling case for the importance of data, it has some limitations. The authors primarily focus on supervised learning tasks with abundant labeled data, which may not apply to all machine learning problems. Additionally, the paper does not address the computational and storage challenges associated with massive datasets.</p>
                    
                    <h3>Modern Relevance</h3>
                    <p>The arguments in this paper have become even more relevant with the rise of deep learning and large language models. Modern AI systems like GPT-3 and DALL-E demonstrate the power of training large models on massive datasets. The paper's thesis has been validated by the success of these systems, which rely heavily on data quantity and quality.</p>
                    
                    <h3>Conclusion</h3>
                    <p>"The Unreasonable Effectiveness of Data" presents a compelling argument for the importance of data in machine learning. By demonstrating that simple models with massive data can outperform complex models with limited data, the paper shifted the focus of machine learning research and practice. Its insights continue to influence the development of AI systems and remind us of the fundamental importance of data in the age of artificial intelligence.</p>
                `,
  },
  "alexnet-paper": {
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    authors: "Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton",
    venue: "NIPS 2012",
    year: "2012",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "ImageNet Classification with Deep Convolutional Neural Networks" introduced AlexNet, a deep convolutional neural network that achieved groundbreaking results in the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) 2012. This work marked the beginning of the deep learning revolution in computer vision.</p>
                    
                    <h3>Historical Context</h3>
                    <p>Before AlexNet, traditional computer vision techniques relied on handcrafted features and shallow classifiers. The ImageNet dataset, with over 1.2 million labeled training images across 1000 categories, provided an unprecedented opportunity to train deep neural networks. AlexNet demonstrated that deep convolutional neural networks could significantly outperform traditional methods on large-scale image classification tasks.</p>
                    
                    <h3>Network Architecture</h3>
                    <p>AlexNet consists of eight layers: five convolutional layers and three fully connected layers. The network uses ReLU (Rectified Linear Unit) as the activation function, which helps mitigate the vanishing gradient problem and allows for faster training compared to traditional activation functions like tanh or sigmoid.</p>
                    
                    <h3>Technical Innovations</h3>
                    <p>The paper introduced several technical innovations that contributed to its success:</p>
                    <ul>
                        <li><strong>ReLU Activation</strong>: Using ReLU instead of traditional activation functions accelerated training by several times.</li>
                        <li><strong>GPU Training</strong>: The network was trained on two NVIDIA GTX 580 GPUs, taking advantage of parallel processing to reduce training time.</li>
                        <li><strong>Dropout</strong>: Dropout was used to prevent overfitting by randomly setting a fraction of activations to zero during training.</li>
                        <li><strong>Data Augmentation</strong>: The authors used image translations and horizontal reflections to artificially expand the training dataset.</li>
                    </ul>
                    
                    <h3>Training Details</h3>
                    <p>AlexNet was trained on the ImageNet dataset using stochastic gradient descent with momentum. The training took approximately five to six days on two GPUs. The authors used a learning rate annealing schedule, reducing the learning rate when the validation error stopped improving.</p>
                    
                    <h3>Experimental Results</h3>
                    <p>AlexNet achieved a top-5 error rate of 15.3% on the ImageNet test set, significantly outperforming the second-place entry, which had an error rate of 26.2%. This large margin of victory demonstrated the superiority of deep convolutional neural networks for image classification tasks.</p>
                    
                    <h3>Visualization of Learned Features</h3>
                    <p>The paper included visualizations of the features learned by the network. The first convolutional layer learned to detect simple features like edges and color blobs, while deeper layers learned more complex features like textures and object parts. These visualizations provided insight into how the network processes images.</p>
                    
                    <h3>Impact and Legacy</h3>
                    <p>AlexNet had a profound impact on computer vision and deep learning. It demonstrated the potential of deep convolutional neural networks and inspired a new generation of research in this area. The techniques introduced in the paper, such as ReLU activation and dropout, have become standard components of deep neural networks.</p>
                    
                    <h3>Limitations and Future Directions</h3>
                    <p>Despite its success, AlexNet had some limitations. The network required significant computational resources for training, which was a barrier for many researchers at the time. Additionally, the architecture was relatively simple compared to modern networks. Future research has explored deeper and more complex architectures, as well as more efficient training methods.</p>
                    
                    <h3>Conclusion</h3>
                    <p>"ImageNet Classification with Deep Convolutional Neural Networks" represents a watershed moment in the history of artificial intelligence. By demonstrating the effectiveness of deep convolutional neural networks on a large-scale image classification task, the paper launched the deep learning revolution in computer vision. Its innovations and insights continue to influence research and applications in artificial intelligence today.</p>
                `,
  },
  "gpt3-paper": {
    title: "Language Models are Few-Shot Learners",
    authors: "Tom B. Brown et al.",
    venue: "NeurIPS 2020",
    year: "2020",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "Language Models are Few-Shot Learners" introduced GPT-3, a 175-billion parameter autoregressive language model that demonstrated remarkable few-shot learning capabilities. GPT-3 achieved state-of-the-art results on numerous natural language processing tasks without any task-specific fine-tuning, simply by providing examples in the context.</p>
                    
                    <h3>Model Architecture and Training</h3>
                    <p>GPT-3 is based on the Transformer architecture, similar to its predecessor GPT-2, but with significantly more parameters (175 billion compared to GPT-2's 1.5 billion). The model was trained on a diverse dataset of 500 billion tokens from books, Wikipedia, and web pages. The training process utilized a mixture of techniques including data parallelism and model parallelism to handle the massive scale.</p>
                    
                    <h3>Few-Shot, One-Shot, and Zero-Shot Learning</h3>
                    <p>The paper explored three settings for evaluating the model:</p>
                    <ul>
                        <li><strong>Zero-shot</strong>: The model is given only a natural language description of the task.</li>
                        <li><strong>One-shot</strong>: The model is given one example of the task in addition to the description.</li>
                        <li><strong>Few-shot</strong>: The model is given a few examples (typically 10 to 100) of the task.</li>
                    </ul>
                    <p>Remarkably, GPT-3 performed well in all three settings, often approaching or exceeding the performance of state-of-the-art fine-tuned models.</p>
                    
                    <h3>Task Performance</h3>
                    <p>GPT-3 was evaluated on a wide range of tasks, including:</p>
                    <ul>
                        <li><strong>SuperGLUE</strong>: A benchmark for natural language understanding</li>
                        <li><strong>Question Answering</strong>: Including reading comprehension and open-domain QA</li>
                        <li><strong>Translation</strong>: Between multiple language pairs</li>
                        <li><strong>Common Sense Reasoning</strong>: Tasks requiring everyday knowledge</li>
                        <li><strong>Word Scrambles</strong>: Unscrambling words and sentences</li>
                        <li><strong>Arithmetic</strong>: Simple mathematical operations</li>
                        <li><strong>Novel Task Generation</strong>: Creating new tasks and solving them</li>
                    </ul>
                    <p>In many cases, GPT-3's few-shot performance approached or exceeded that of state-of-the-art fine-tuned models.</p>
                    
                    <h3>Limitations and Challenges</h3>
                    <p>Despite its impressive capabilities, GPT-3 has several limitations:</p>
                    <ul>
                        <li><strong>Text Generation Quality</strong>: The model can sometimes generate repetitive or nonsensical text.</li>
                        <li><strong>Factual Accuracy</strong>: GPT-3 can generate plausible-sounding but factually incorrect information.</li>
                        <li><strong>Bias and Fairness</strong>: The model reflects and can amplify biases present in its training data.</li>
                        <li><strong>Computational Requirements</strong>: Training and running GPT-3 requires massive computational resources.</li>
                    </ul>
                    
                    <h3>Ethical Considerations</h3>
                    <p>The paper discusses several ethical considerations related to large language models like GPT-3:</p>
                    <ul>
                        <li><strong>Misuse Potential</strong>: The model could be used to generate misleading content, impersonate individuals, or automate harassment.</li>
                        <li><strong>Energy Consumption</strong>: Training large models has significant environmental impacts.</li>
                        <li><strong>Economic Disruption</strong>: Automation of tasks currently performed by humans could lead to job displacement.</li>
                    </ul>
                    <p>The authors implemented a content filter to prevent misuse and restricted access to the model through an API.</p>
                    
                    <h3>Analysis of Model Behavior</h3>
                    <p>The paper includes detailed analysis of GPT-3's behavior across different tasks and settings. The authors found that:</p>
                    <ul>
                        <li>Performance generally improves with more examples in the few-shot setting.</li>
                        <li>The model shows sensitivity to the formatting of examples.</li>
                        <li>Performance varies significantly across tasks, with the model excelling at some tasks and struggling with others.</li>
                    </ul>
                    
                    <h3>Impact and Legacy</h3>
                    <p>GPT-3 has had a profound impact on natural language processing and artificial intelligence. It demonstrated the potential of scaling up language models and sparked renewed interest in few-shot learning. The model has been used in numerous applications, from writing assistance to code generation, and has inspired the development of even larger language models.</p>
                    
                    <h3>Future Directions</h3>
                    <p>The paper suggests several directions for future research:</p>
                    <ul>
                        <li>Improving the sample efficiency of large language models</li>
                        <li>Developing better methods for controlling and guiding text generation</li>
                        <li>Addressing the ethical and societal implications of large language models</li>
                        <li>Exploring the fundamental capabilities and limitations of these models</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>"Language Models are Few-Shot Learners" represents a significant milestone in the development of artificial intelligence. By demonstrating that a single large language model can perform well on a wide range of tasks with minimal task-specific training, the paper opened new possibilities for AI systems. GPT-3's capabilities and limitations provide valuable insights for the future development of artificial intelligence and its applications in society.</p>
                `,
  },
  "yolo-paper": {
    title: "You Only Look Once: Unified, Real-Time Object Detection",
    authors: "Joseph Redmon, Santosh Divvala, Ross Girshick, Ali Farhadi",
    venue: "CVPR 2016",
    year: "2016",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "You Only Look Once: Unified, Real-Time Object Detection" introduced YOLO (You Only Look Once), a novel approach to object detection that treats object detection as a single regression problem. Unlike previous methods that repurpose classifiers to perform detection, YOLO looks at the entire image only once and directly predicts bounding boxes and class probabilities.</p>
                    
                    <h3>Motivation</h3>
                    <p>Before YOLO, object detection systems typically used multiple components: a region proposal method to identify potential objects, followed by a classifier to recognize each object. This multi-stage approach was slow and complex. YOLO was designed to be fast, simple, and unified, performing object detection in a single pass through the network.</p>
                    
                    <h3>Unified Detection</h3>
                    <p>YOLO reformulates object detection as a single regression problem, straight from image pixels to bounding box coordinates and class probabilities. The system divides the input image into an S×S grid. Each grid cell predicts B bounding boxes, confidence scores for those boxes, and C class probabilities. This unified approach makes YOLO extremely fast and able to see the entire image at once.</p>
                    
                    <h3>Network Design</h3>
                    <p>The YOLO network has 24 convolutional layers followed by 2 fully connected layers. The network was inspired by the GoogLeNet model for image classification but with a simpler design. Fast YOLO, a smaller version of the network, uses only 9 convolutional layers and fewer filters in those layers.</p>
                    
                    <h3>Training</h3>
                    <p>The network was pre-trained on the ImageNet dataset for classification before being fine-tuned for object detection on the PASCAL VOC dataset. The authors used a combination of sum-squared error for the bounding box coordinates and cross-entropy loss for the classification probabilities. They also implemented a multi-scale training strategy to improve detection of objects at different sizes.</p>
                    
                    <h3>Inference</h3>
                    <p>During inference, YOLO processes images in a single forward pass through the network, making it extremely fast. The base YOLO model processes images at 45 frames per second, while the smaller Fast YOLO version achieves 155 frames per second. This real-time performance makes YOLO suitable for applications like video analysis and autonomous driving.</p>
                    
                    <h3>Limitations of YOLO</h3>
                    <p>Despite its speed, YOLO has some limitations:</p>
                    <ul>
                        <li>It struggles with small objects that appear in groups.</li>
                        <li>It makes localization errors compared to state-of-the-art detection systems.</li>
                        <li>It has lower recall compared to two-stage detectors like Faster R-CNN.</li>
                    </ul>
                    <p>These limitations stem from YOLO's unified approach, which trades some accuracy for speed.</p>
                    
                    <h3>Experimental Results</h3>
                    <p>YOLO achieved state-of-the-art real-time object detection performance on the PASCAL VOC dataset. While its accuracy was slightly lower than top two-stage methods, it was significantly faster. On the COCO dataset, YOLO demonstrated good performance across different object categories, though it struggled with small objects.</p>
                    
                    <h3>Comparison with Other Methods</h3>
                    <p>The paper compared YOLO with other object detection methods, including DPM, R-CNN, Fast R-CNN, Faster R-CNN, and SSD. YOLO was significantly faster than all these methods while maintaining competitive accuracy. The authors also showed that YOLO makes fewer background errors than other methods, as it sees the entire image during training.</p>
                    
                    <h3>Generalization to Other Domains</h3>
                    <p>The authors demonstrated YOLO's ability to generalize to other domains, including artwork and natural images. They showed that YOLO can detect objects in Picasso paintings and other artistic styles, suggesting that the model learns general features of objects rather than just photographic patterns.</p>
                    
                    <h3>Impact and Legacy</h3>
                    <p>YOLO has had a profound impact on computer vision and object detection. Its unified approach and real-time performance made it popular for applications requiring fast object detection. The paper inspired numerous subsequent works, including YOLOv2, YOLOv3, and other real-time object detection systems.</p>
                    
                    <h3>Future Directions</h3>
                    <p>The paper suggested several directions for future research:</p>
                    <ul>
                        <li>Improving the detection of small objects</li>
                        <li>Reducing localization errors</li>
                        <li>Exploring different network architectures</li>
                        <li>Extending the approach to other tasks like instance segmentation</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>"You Only Look Once: Unified, Real-Time Object Detection" introduced a novel approach to object detection that prioritizes speed without sacrificing too much accuracy. By treating object detection as a single regression problem, YOLO achieved real-time performance that was previously unattainable. The paper's unified approach has influenced subsequent research in object detection and computer vision, making YOLO one of the most important contributions to the field.</p>
                `,
  },
  "alphago-paper": {
    title: "Mastering the Game of Go with Deep Neural Networks and Tree Search",
    authors: "David Silver et al.",
    venue: "Nature",
    year: "2016",
    content: `
                    <h3>Introduction</h3>
                    <p>The paper "Mastering the Game of Go with Deep Neural Networks and Tree Search" introduced AlphaGo, the first computer program to defeat a professional human Go player. This achievement marked a significant milestone in artificial intelligence, as Go is considered one of the most challenging board games for AI due to its vast search space and difficulty in evaluating positions.</p>
                    
                    <h3>The Challenge of Go</h3>
                    <p>Go is an ancient board game known for its complexity. With approximately 10^170 possible board configurations, it's infeasible to solve by brute-force search. Unlike games like chess, Go positions are difficult for computers to evaluate, making traditional AI approaches ineffective. Before AlphaGo, the strongest Go programs were only at amateur level.</p>
                    
                    <h3>AlphaGo's Approach</h3>
                    <p>AlphaGo combines deep neural networks with Monte Carlo tree search (MCTS) to achieve its performance. The system uses two neural networks:</p>
                    <ul>
                        <li><strong>Policy Network</strong>: Selects moves to explore in the tree search</li>
                        <li><strong>Value Network</strong>: Evaluates the probability of winning from a given position</li>
                    </ul>
                    <p>These networks are trained using a combination of supervised learning from expert human games and reinforcement learning through self-play.</p>
                    
                    <h3>Neural Network Architecture</h3>
                    <p>Both the policy and value networks use deep convolutional neural networks. The policy network has 13 layers and takes as input the current board state. It outputs a probability distribution over legal moves. The value network has similar architecture but outputs a single value representing the probability of winning from the current position.</p>
                    
                    <h3>Training Process</h3>
                    <p>AlphaGo's training involves three stages:</p>
                    <ol>
                        <li><strong>Supervised Learning</strong>: The policy network is trained on 29.4 million positions from games played by human experts.</li>
                        <li><strong>Reinforcement Learning</strong>: The policy network is further improved through self-play, where it plays against previous versions of itself.</li>
                        <li><strong>Value Network Training</strong>: The value network is trained on positions from the self-play games to predict the winner of each game.</li>
                    </ol>
                    
                    <h3>Monte Carlo Tree Search</h3>
                    <p>During gameplay, AlphaGo uses Monte Carlo tree search to select moves. The neural networks guide the search by evaluating positions and selecting promising moves to explore. This combination of deep learning and tree search allows AlphaGo to focus its computational resources on the most promising lines of play.</p>
                    
                    <h3>Experimental Results</h3>
                    <p>AlphaGo achieved remarkable results:</p>
                    <ul>
                        <li>It defeated the European Go champion Fan Hui 5-0 in October 2015, the first time a computer program defeated a professional Go player on a full-sized board without handicaps.</li>
                        <li>In March 2016, it defeated the legendary Go player Lee Sedol 4-1 in a widely publicized match.</li>
                        <li>It achieved a 99.8% winning rate against other Go programs, including the previous strongest programs.</li>
                    </ul>
                    
                    <h3>Analysis of AlphaGo's Play</h3>
                    <p>The paper includes detailed analysis of AlphaGo's play style. The system often makes moves that appear unconventional to human experts but are later recognized as strong. AlphaGo also demonstrates a deep understanding of complex strategic concepts, including influence, territory, and life-and-death situations.</p>
                    
                    <h3>Comparison with Previous Approaches</h3>
                    <p>AlphaGo significantly outperformed previous Go programs, which relied heavily on handcrafted features and search heuristics. The neural network approach allowed AlphaGo to learn patterns and strategies from data rather than relying on human knowledge. This data-driven approach proved more effective than traditional AI techniques for Go.</p>
                    
                    <h3>Impact and Legacy</h3>
                    <p>AlphaGo's victory had a profound impact on artificial intelligence and beyond:</p>
                    <ul>
                        <li>It demonstrated that deep reinforcement learning could master complex games previously thought to be beyond AI's reach.</li>
                        <li>It inspired renewed interest in AI and machine learning, particularly in combining deep learning with search algorithms.</li>
                        <li>It influenced the development of subsequent AI systems, including AlphaGo Zero, AlphaZero, and MuZero.</li>
                        <li>It sparked discussions about the future of AI and its implications for human expertise.</li>
                    </ul>
                    
                    <h3>Ethical and Philosophical Implications</h3>
                    <p>AlphaGo's success raised important questions about the nature of intelligence and creativity. The paper briefly touches on these implications, noting that while AlphaGo can outperform humans at Go, it doesn't possess human-like understanding or consciousness. The authors emphasize that the goal of such research is not to replace human experts but to create tools that can assist in solving complex problems.</p>
                    
                    <h3>Future Directions</h3>
                    <p>The paper suggests several directions for future research:</p>
                    <ul>
                        <li>Improving the efficiency of the training process</li>
                        <li>Applying similar techniques to other domains</li>
                        <li>Exploring the theoretical foundations of deep reinforcement learning</li>
                        <li>Developing more interpretable AI systems</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>"Mastering the Game of Go with Deep Neural Networks and Tree Search" represents a landmark achievement in artificial intelligence. By combining deep neural networks with Monte Carlo tree search, AlphaGo demonstrated that AI could master one of the most complex games ever created. The paper's innovations have influenced numerous subsequent works and continue to shape the development of artificial intelligence today.</p>
                `,
  },
  "big-data-paper": {
    title:
      "Big Data: The Next Frontier for Innovation, Competition, and Productivity",
    authors: "McKinsey Global Institute",
    venue: "McKinsey Report",
    year: "2011",
    content: `
                    <h3>Introduction</h3>
                    <p>The McKinsey Global Institute report "Big Data: The Next Frontier for Innovation, Competition, and Productivity" was one of the first comprehensive analyses of the potential impact of big data across various sectors and business functions. The report defined big data as "datasets whose size is beyond the ability of typical database software tools to capture, store, manage, and analyze" and explored how organizations could leverage large datasets to create value.</p>
                    
                    <h3>The Five Key Ways Big Data Can Create Value</h3>
                    <p>The report identified five key ways in which big data can create value for organizations:</p>
                    <ol>
                        <li><strong>Transparency</strong>: Making big data more accessible to stakeholders can improve decision-making.</li>
                        <li><strong>Performance Variability</strong>: Detailed performance data can help identify high and low performers.</li>
                        <li><strong>Segmentation</strong>: Big data enables more precise segmentation of customers and markets.</li>
                        <li><strong>Decision Making</strong>: Sophisticated analytics can improve decision-making processes.</li>
                        <li><strong>Innovation</strong>: Big data can drive the development of next-generation products and services.</li>
                    </ol>
                    
                    <h3>Potential Value Across Sectors</h3>
                    <p>The report analyzed the potential impact of big data across various sectors:</p>
                    <ul>
                        <li><strong>Healthcare</strong>: Could create $300 billion in annual value in the US healthcare system through improved outcomes and efficiency.</li>
                        <li><strong>Retail</strong>: Could increase operating margins by more than 60% through better customer insights and supply chain optimization.</li>
                        <li><strong>Manufacturing</strong>: Could reduce product development and assembly costs by up to 50% through better demand forecasting and production planning.</li>
                        <li><strong>Public Sector</strong>: Could improve productivity and efficiency in government operations, potentially saving billions of dollars.</li>
                    </ul>
                    
                    <h3>Barriers to Adoption</h3>
                    <p>Despite its potential, the report identified several barriers to the adoption of big data:</p>
                    <ul>
                        <li><strong>Data Policies</strong>: Concerns about privacy, security, and intellectual property.</li>
                        <li><strong>Technology</strong>: Limitations in current technology for storing, processing, and analyzing large datasets.</li>
                        <li><strong>Organizational</strong>: Lack of skills, culture, and organizational structure to leverage big data.</li>
                        <li><strong>Economic</strong>: High costs of implementation and uncertain return on investment.</li>
                    </ul>
                    
                    <h3>The Importance of Skills</h3>
                    <p>The report emphasized the critical importance of skills in realizing the potential of big data. It projected a significant shortage of talent with deep analytical skills, estimating that by 2018, the United States alone could face a shortage of 140,000 to 190,000 people with deep analytical skills, as well as 1.5 million managers and analysts with the skills to use big data analysis to make effective decisions.</p>
                    
                    <h3>Policy Implications</h3>
                    <p>The report discussed several policy implications of the big data revolution:</p>
                    <ul>
                        <li>Need for new frameworks for privacy and security</li>
                        <li>Importance of open data initiatives</li>
                        <li>Role of education in developing necessary skills</li>
                        <li>Potential for new regulations to address emerging issues</li>
                    </ul>
                    
                    <h3>Case Studies</h3>
                    <p>The report included several case studies illustrating the potential of big data:</p>
                    <ul>
                        <li><strong>Retail</strong>: How a major retailer used big data to optimize inventory and reduce out-of-stock situations.</li>
                        <li><strong>Healthcare</strong>: How a healthcare provider used analytics to improve patient outcomes and reduce costs.</li>
                        <li><strong>Public Sector</strong>: How a government agency used data to improve service delivery and reduce fraud.</li>
                    </ul>
                    
                    <h3>Technology Landscape</h3>
                    <p>The report provided an overview of the technology landscape for big data, including:</p>
                        <li>Storage technologies (Hadoop, NoSQL databases)</li>
                        <li>Processing frameworks (MapReduce, Spark)</li>
                        <li>Analytics tools (machine learning, data mining)</li>
                        <li>Visualization technologies</li>
                    
                    <h3>Economic Impact</h3>
                    <p>The report estimated that big data could generate significant economic value:</p>
                    <ul>
                        <li>Potential annual value of $300 billion to $450 billion in the US healthcare sector</li>
                        <li>Potential annual value of $600 billion in consumer surplus from using personal location data globally</li>
                        <li>Potential to increase operating margins in retail by up to 60%</li>
                    </ul>
                    
                    <h3>Implementation Challenges</h3>
                    <p>The report highlighted several challenges in implementing big data initiatives:</p>
                    <ul>
                        <li>Integrating structured and unstructured data</li>
                        <li>Developing the right analytical capabilities</li>
                        <li>Creating a data-driven culture</li>
                        <li>Ensuring data quality and governance</li>
                    </ul>
                    
                    <h3>Future Outlook</h3>
                    <p>The report concluded with an optimistic outlook on the future of big data, predicting that as technology continues to evolve and organizations become more sophisticated in their use of data, the value created by big data will continue to grow. The authors emphasized that organizations that embrace big data early will gain a significant competitive advantage.</p>
                    
                    <h3>Legacy and Impact</h3>
                    <p>Since its publication, the McKinsey report has been widely cited as a foundational document in the big data field. It helped popularize the concept of big data and raise awareness of its potential across business and government. Many of the report's predictions have proven accurate, including the growing importance of data skills and the significant impact of big data across various sectors.</p>
                    
                    <h3>Conclusion</h3>
                    <p>"Big Data: The Next Frontier for Innovation, Competition, and Productivity" provided a comprehensive analysis of the potential impact of big data on business and society. By identifying key opportunities, barriers, and implications, the report helped shape the conversation around big data and set the stage for the data-driven revolution that has transformed numerous industries in the decade since its publication.</p>
                `,
  },
};

// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const researchCards = document.querySelectorAll(".research-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    // Get filter value
    const filterValue = this.getAttribute("data-filter");

    // Show/hide research cards based on filter
    researchCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById("researchModal");
const modalTitle = document.getElementById("modalTitle");
const modalAuthors = document.getElementById("modalAuthors");
const modalVenue = document.getElementById("modalVenue");
const modalYear = document.getElementById("modalYear");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");
const closeModalIconBtn = document.getElementById("closeModalIcon");
const researchBtns = document.querySelectorAll(".research-btn");

// Open modal when research button is clicked
researchBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get research ID
    const researchId = this.getAttribute("data-id");

    // Get research data from JavaScript object
    const research = researchContent[researchId];

    if (research) {
      // Set modal content
      modalTitle.textContent = research.title;
      modalAuthors.textContent = research.authors;
      modalVenue.textContent = research.venue;
      modalYear.textContent = research.year;
      modalContent.innerHTML = research.content;

      // Show modal
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling

      // Scroll to top of modal content
      modalContent.scrollTop = 0;
    }
  });
});

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Close modal when close icon is clicked
closeModalIconBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Close modal when clicking outside of modal content
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});